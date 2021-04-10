package keeper

import (
	"github.com/jboetticher/simpleclcosmos/x/clprice/types"
)

var _ types.QueryServer = Keeper{}
