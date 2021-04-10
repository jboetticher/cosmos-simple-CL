package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers clprice-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/clprice/sentPrices/{id}", getSentPriceHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/clprice/sentPrices", listSentPriceHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/clprice/prices/{id}", getPriceHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/clprice/prices", listPriceHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/clprice/sentPrices", createSentPriceHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/clprice/sentPrices/{id}", updateSentPriceHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/clprice/sentPrices/{id}", deleteSentPriceHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/clprice/prices", createPriceHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/clprice/prices/{id}", updatePriceHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/clprice/prices/{id}", deletePriceHandler(clientCtx)).Methods("POST")

}
