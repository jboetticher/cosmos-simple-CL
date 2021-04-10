package keeper

import (
	"github.com/jboetticher/simpleclcosmos/x/simpleclcosmos/types"
)

var _ types.QueryServer = Keeper{}
