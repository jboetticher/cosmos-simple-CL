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

func (k Keeper) SentPriceAll(c context.Context, req *types.QueryAllSentPriceRequest) (*types.QueryAllSentPriceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sentPrices []*types.SentPrice
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	sentPriceStore := prefix.NewStore(store, types.KeyPrefix(types.SentPriceKey))

	pageRes, err := query.Paginate(sentPriceStore, req.Pagination, func(key []byte, value []byte) error {
		var sentPrice types.SentPrice
		if err := k.cdc.UnmarshalBinaryBare(value, &sentPrice); err != nil {
			return err
		}

		sentPrices = append(sentPrices, &sentPrice)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSentPriceResponse{SentPrice: sentPrices, Pagination: pageRes}, nil
}

func (k Keeper) SentPrice(c context.Context, req *types.QueryGetSentPriceRequest) (*types.QueryGetSentPriceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sentPrice types.SentPrice
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasSentPrice(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentPriceKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetSentPriceIDBytes(req.Id)), &sentPrice)

	return &types.QueryGetSentPriceResponse{SentPrice: &sentPrice}, nil
}
