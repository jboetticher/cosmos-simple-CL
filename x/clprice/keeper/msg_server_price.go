package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/jboetticher/simpleclcosmos/x/clprice/types"
)

func (k msgServer) CreatePrice(goCtx context.Context, msg *types.MsgCreatePrice) (*types.MsgCreatePriceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendPrice(
		ctx,
		msg.Creator,
		msg.Name,
		msg.Price,
		msg.Date,
	)

	return &types.MsgCreatePriceResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePrice(goCtx context.Context, msg *types.MsgUpdatePrice) (*types.MsgUpdatePriceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var price = types.Price{
		Creator: msg.Creator,
		Id:      msg.Id,
		Name:    msg.Name,
		Price:   msg.Price,
		Date:    msg.Date,
	}

	// Checks that the element exists
	if !k.HasPrice(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetPriceOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPrice(ctx, price)

	return &types.MsgUpdatePriceResponse{}, nil
}

func (k msgServer) DeletePrice(goCtx context.Context, msg *types.MsgDeletePrice) (*types.MsgDeletePriceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasPrice(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetPriceOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePrice(ctx, msg.Id)

	return &types.MsgDeletePriceResponse{}, nil
}
