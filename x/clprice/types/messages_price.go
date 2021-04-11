package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"time"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
	"strconv"
)

var _ sdk.Msg = &MsgCreatePrice{}

func NewMsgCreatePrice(creator string, name string, price int32, date int32) *MsgCreatePrice {

	// TODO: this is where we get the data from the wallet.
	var currentPrice int32 = -1
	var newName string = name
	conn, err := ethclient.Dial("https://kovan.infura.io/v3/8e655913ba684608bcbfc42b3626b8dc")
	if err == nil {
		contractAddress := common.HexToAddress("0xEC60b0Bb5aa407001c726fbC174bFe7d3b671eAE")
		contract, err := NewPriceConsumerV3(contractAddress, conn);
		if err == nil {
			p, ohno := contract.GetLatestPrice(&bind.CallOpts{})
			p = p / 10000
			if ohno != nil {
				newName = ohno.Error()
			} else {
				pstr := p.String()
				gah, _ := strconv.Atoi(pstr)
				currentPrice =  int32(gah)
			}
		}
	} 

	currentDate := int32(time.Now().Unix())

	return &MsgCreatePrice{
		Creator: creator,
		Name:    newName,
		Price:   currentPrice,
		Date:    currentDate,
	}
}

func (msg *MsgCreatePrice) Route() string {
	return RouterKey
}

func (msg *MsgCreatePrice) Type() string {
	return "CreatePrice"
}

func (msg *MsgCreatePrice) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePrice) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePrice) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePrice{}

func NewMsgUpdatePrice(creator string, id uint64, name string, price int32, date int32) *MsgUpdatePrice {
	return &MsgUpdatePrice{
		Id:      id,
		Creator: creator,
		Name:    name,
		Price:   price,
		Date:    date,
	}
}

func (msg *MsgUpdatePrice) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePrice) Type() string {
	return "UpdatePrice"
}

func (msg *MsgUpdatePrice) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePrice) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePrice) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreatePrice{}

func NewMsgDeletePrice(creator string, id uint64) *MsgDeletePrice {
	return &MsgDeletePrice{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeletePrice) Route() string {
	return RouterKey
}

func (msg *MsgDeletePrice) Type() string {
	return "DeletePrice"
}

func (msg *MsgDeletePrice) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePrice) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePrice) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
