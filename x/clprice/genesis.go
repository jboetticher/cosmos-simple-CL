package clprice

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/jboetticher/simpleclcosmos/x/clprice/keeper"
	"github.com/jboetticher/simpleclcosmos/x/clprice/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the sentPrice
	for _, elem := range genState.SentPriceList {
		k.SetSentPrice(ctx, *elem)
	}

	// Set sentPrice count
	k.SetSentPriceCount(ctx, uint64(len(genState.SentPriceList)))

	// Set all the price
	for _, elem := range genState.PriceList {
		k.SetPrice(ctx, *elem)
	}

	// Set price count
	k.SetPriceCount(ctx, uint64(len(genState.PriceList)))

	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all sentPrice
	sentPriceList := k.GetAllSentPrice(ctx)
	for _, elem := range sentPriceList {
		elem := elem
		genesis.SentPriceList = append(genesis.SentPriceList, &elem)
	}

	// Get all price
	priceList := k.GetAllPrice(ctx)
	for _, elem := range priceList {
		elem := elem
		genesis.PriceList = append(genesis.PriceList, &elem)
	}

	genesis.PortId = k.GetPort(ctx)

	return genesis
}
