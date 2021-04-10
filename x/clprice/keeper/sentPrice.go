package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/jboetticher/simpleclcosmos/x/clprice/types"
	"strconv"
)

// GetSentPriceCount get the total number of sentPrice
func (k Keeper) GetSentPriceCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentPriceCountKey))
	byteKey := types.KeyPrefix(types.SentPriceCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetSentPriceCount set the total number of sentPrice
func (k Keeper) SetSentPriceCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentPriceCountKey))
	byteKey := types.KeyPrefix(types.SentPriceCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendSentPrice appends a sentPrice in the store with a new id and update the count
func (k Keeper) AppendSentPrice(
	ctx sdk.Context,
	creator string,
	priceID string,
	name string,
	chain string,
) uint64 {
	// Create the sentPrice
	count := k.GetSentPriceCount(ctx)
	var sentPrice = types.SentPrice{
		Creator: creator,
		Id:      count,
		PriceID: priceID,
		Name:    name,
		Chain:   chain,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentPriceKey))
	value := k.cdc.MustMarshalBinaryBare(&sentPrice)
	store.Set(GetSentPriceIDBytes(sentPrice.Id), value)

	// Update sentPrice count
	k.SetSentPriceCount(ctx, count+1)

	return count
}

// SetSentPrice set a specific sentPrice in the store
func (k Keeper) SetSentPrice(ctx sdk.Context, sentPrice types.SentPrice) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentPriceKey))
	b := k.cdc.MustMarshalBinaryBare(&sentPrice)
	store.Set(GetSentPriceIDBytes(sentPrice.Id), b)
}

// GetSentPrice returns a sentPrice from its id
func (k Keeper) GetSentPrice(ctx sdk.Context, id uint64) types.SentPrice {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentPriceKey))
	var sentPrice types.SentPrice
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetSentPriceIDBytes(id)), &sentPrice)
	return sentPrice
}

// HasSentPrice checks if the sentPrice exists in the store
func (k Keeper) HasSentPrice(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentPriceKey))
	return store.Has(GetSentPriceIDBytes(id))
}

// GetSentPriceOwner returns the creator of the sentPrice
func (k Keeper) GetSentPriceOwner(ctx sdk.Context, id uint64) string {
	return k.GetSentPrice(ctx, id).Creator
}

// RemoveSentPrice removes a sentPrice from the store
func (k Keeper) RemoveSentPrice(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentPriceKey))
	store.Delete(GetSentPriceIDBytes(id))
}

// GetAllSentPrice returns all sentPrice
func (k Keeper) GetAllSentPrice(ctx sdk.Context) (list []types.SentPrice) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentPriceKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SentPrice
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetSentPriceIDBytes returns the byte representation of the ID
func GetSentPriceIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetSentPriceIDFromBytes returns ID in uint64 format from a byte array
func GetSentPriceIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
