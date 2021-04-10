package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/cosmos-sdk/x/ibc/core/02-client/types"
	"github.com/jboetticher/simpleclcosmos/x/clprice/types"
)

func (k msgServer) SendIbcPrice(goCtx context.Context, msg *types.MsgSendIbcPrice) (*types.MsgSendIbcPriceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.IbcPricePacketData

	packet.Name = msg.Name
	packet.Price = msg.Price
	packet.Date = msg.Date

	// Transmit the packet
	err := k.TransmitIbcPricePacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendIbcPriceResponse{}, nil
}
