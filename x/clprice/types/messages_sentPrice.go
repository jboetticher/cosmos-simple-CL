package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateSentPrice{}

func NewMsgCreateSentPrice(creator string, priceID string, name string, chain string) *MsgCreateSentPrice {
	return &MsgCreateSentPrice{
		Creator: creator,
		PriceID: priceID,
		Name:    name,
		Chain:   chain,
	}
}

func (msg *MsgCreateSentPrice) Route() string {
	return RouterKey
}

func (msg *MsgCreateSentPrice) Type() string {
	return "CreateSentPrice"
}

func (msg *MsgCreateSentPrice) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSentPrice) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSentPrice) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSentPrice{}

func NewMsgUpdateSentPrice(creator string, id uint64, priceID string, name string, chain string) *MsgUpdateSentPrice {
	return &MsgUpdateSentPrice{
		Id:      id,
		Creator: creator,
		PriceID: priceID,
		Name:    name,
		Chain:   chain,
	}
}

func (msg *MsgUpdateSentPrice) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSentPrice) Type() string {
	return "UpdateSentPrice"
}

func (msg *MsgUpdateSentPrice) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSentPrice) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSentPrice) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateSentPrice{}

func NewMsgDeleteSentPrice(creator string, id uint64) *MsgDeleteSentPrice {
	return &MsgDeleteSentPrice{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteSentPrice) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSentPrice) Type() string {
	return "DeleteSentPrice"
}

func (msg *MsgDeleteSentPrice) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSentPrice) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSentPrice) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
