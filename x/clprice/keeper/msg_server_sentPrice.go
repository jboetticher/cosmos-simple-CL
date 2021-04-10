package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/jboetticher/simpleclcosmos/x/clprice/types"
)

func (k msgServer) CreateSentPrice(goCtx context.Context, msg *types.MsgCreateSentPrice) (*types.MsgCreateSentPriceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendSentPrice(
		ctx,
		msg.Creator,
		msg.PriceID,
		msg.Name,
		msg.Chain,
	)

	return &types.MsgCreateSentPriceResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateSentPrice(goCtx context.Context, msg *types.MsgUpdateSentPrice) (*types.MsgUpdateSentPriceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var sentPrice = types.SentPrice{
		Creator: msg.Creator,
		Id:      msg.Id,
		PriceID: msg.PriceID,
		Name:    msg.Name,
		Chain:   msg.Chain,
	}

	// Checks that the element exists
	if !k.HasSentPrice(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetSentPriceOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetSentPrice(ctx, sentPrice)

	return &types.MsgUpdateSentPriceResponse{}, nil
}

func (k msgServer) DeleteSentPrice(goCtx context.Context, msg *types.MsgDeleteSentPrice) (*types.MsgDeleteSentPriceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasSentPrice(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetSentPriceOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveSentPrice(ctx, msg.Id)

	return &types.MsgDeleteSentPriceResponse{}, nil
}
