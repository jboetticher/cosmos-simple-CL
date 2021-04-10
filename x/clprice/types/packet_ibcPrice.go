package types

// ValidateBasic is used for validating the packet
func (p IbcPricePacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p IbcPricePacketData) GetBytes() ([]byte, error) {
	var modulePacket ClpricePacketData

	modulePacket.Packet = &ClpricePacketData_IbcPricePacket{&p}

	return modulePacket.Marshal()
}
