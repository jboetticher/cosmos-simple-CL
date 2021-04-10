package simpleclcosmos

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/jboetticher/simpleclcosmos/x/simpleclcosmos/keeper"
	"github.com/jboetticher/simpleclcosmos/x/simpleclcosmos/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
