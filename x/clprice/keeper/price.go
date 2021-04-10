package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/jboetticher/simpleclcosmos/x/clprice/types"
	"strconv"
)

// GetPriceCount get the total number of price
func (k Keeper) GetPriceCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PriceCountKey))
	byteKey := types.KeyPrefix(types.PriceCountKey)
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

// SetPriceCount set the total number of price
func (k Keeper) SetPriceCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PriceCountKey))
	byteKey := types.KeyPrefix(types.PriceCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendPrice appends a price in the store with a new id and update the count
func (k Keeper) AppendPrice(
	ctx sdk.Context,
	creator string,
	name string,
	price int32,
	date int32,
) uint64 {
	// Create the price
	count := k.GetPriceCount(ctx)
	var priceObj = types.Price{
		Creator: creator,
		Id:      count,
		Name:    name,
		Price:   price,
		Date:    date,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PriceKey))
	value := k.cdc.MustMarshalBinaryBare(&priceObj)
	store.Set(GetPriceIDBytes(priceObj.Id), value)

	// Update price count
	k.SetPriceCount(ctx, count+1)

	return count
}

// SetPrice set a specific price in the store
func (k Keeper) SetPrice(ctx sdk.Context, price types.Price) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PriceKey))
	b := k.cdc.MustMarshalBinaryBare(&price)
	store.Set(GetPriceIDBytes(price.Id), b)
}

// GetPrice returns a price from its id
func (k Keeper) GetPrice(ctx sdk.Context, id uint64) types.Price {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PriceKey))
	var price types.Price
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPriceIDBytes(id)), &price)
	return price
}

// HasPrice checks if the price exists in the store
func (k Keeper) HasPrice(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PriceKey))
	return store.Has(GetPriceIDBytes(id))
}

// GetPriceOwner returns the creator of the price
func (k Keeper) GetPriceOwner(ctx sdk.Context, id uint64) string {
	return k.GetPrice(ctx, id).Creator
}

// RemovePrice removes a price from the store
func (k Keeper) RemovePrice(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PriceKey))
	store.Delete(GetPriceIDBytes(id))
}

// GetAllPrice returns all price
func (k Keeper) GetAllPrice(ctx sdk.Context) (list []types.Price) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PriceKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Price
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPriceIDBytes returns the byte representation of the ID
func GetPriceIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPriceIDFromBytes returns ID in uint64 format from a byte array
func GetPriceIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
