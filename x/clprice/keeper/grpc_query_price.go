package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/jboetticher/simpleclcosmos/x/clprice/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) PriceAll(c context.Context, req *types.QueryAllPriceRequest) (*types.QueryAllPriceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var prices []*types.Price
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	priceStore := prefix.NewStore(store, types.KeyPrefix(types.PriceKey))

	pageRes, err := query.Paginate(priceStore, req.Pagination, func(key []byte, value []byte) error {
		var price types.Price
		if err := k.cdc.UnmarshalBinaryBare(value, &price); err != nil {
			return err
		}

		prices = append(prices, &price)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPriceResponse{Price: prices, Pagination: pageRes}, nil
}

func (k Keeper) Price(c context.Context, req *types.QueryGetPriceRequest) (*types.QueryGetPriceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var price types.Price
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasPrice(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PriceKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPriceIDBytes(req.Id)), &price)

	return &types.QueryGetPriceResponse{Price: &price}, nil
}
