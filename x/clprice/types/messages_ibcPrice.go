package types

import (
	"time"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSendIbcPrice{}

func NewMsgSendIbcPrice(
	sender string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	name string,
	price int32,
	date int32,
) *MsgSendIbcPrice {

	// TODO: this is where we simulate getting the data from the wallet.
	currentPrice := int32(500)
	currentDate := int32(time.Now().Unix())

	return &MsgSendIbcPrice{
		Sender:           sender,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		Name:             name,
		Price:            currentPrice, //price,
		Date:             currentDate, //date,
	}
}

func (msg *MsgSendIbcPrice) Route() string {
	return RouterKey
}

func (msg *MsgSendIbcPrice) Type() string {
	return "SendIbcPrice"
}

func (msg *MsgSendIbcPrice) GetSigners() []sdk.AccAddress {
	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{sender}
}

func (msg *MsgSendIbcPrice) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendIbcPrice) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid sender address (%s)", err)
	}
	return nil
}
