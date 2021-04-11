// Code generated - DO NOT EDIT.
// This file is a generated binding and any manual changes will be lost.

package PriceConsumerV3

import (
	"math/big"
	"strings"

	ethereum "github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/event"
)

// Reference imports to suppress errors if they are not otherwise used.
var (
	_ = big.NewInt
	_ = strings.NewReader
	_ = ethereum.NotFound
	_ = bind.Bind
	_ = common.Big1
	_ = types.BloomLookup
	_ = event.NewSubscription
)

// PriceConsumerV3ABI is the input ABI used to generate the binding from.
const PriceConsumerV3ABI = "[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"getLatestPrice\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLatestPriceFake\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]"

// PriceConsumerV3 is an auto generated Go binding around an Ethereum contract.
type PriceConsumerV3 struct {
	PriceConsumerV3Caller     // Read-only binding to the contract
	PriceConsumerV3Transactor // Write-only binding to the contract
	PriceConsumerV3Filterer   // Log filterer for contract events
}

// PriceConsumerV3Caller is an auto generated read-only Go binding around an Ethereum contract.
type PriceConsumerV3Caller struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// PriceConsumerV3Transactor is an auto generated write-only Go binding around an Ethereum contract.
type PriceConsumerV3Transactor struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// PriceConsumerV3Filterer is an auto generated log filtering Go binding around an Ethereum contract events.
type PriceConsumerV3Filterer struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// PriceConsumerV3Session is an auto generated Go binding around an Ethereum contract,
// with pre-set call and transact options.
type PriceConsumerV3Session struct {
	Contract     *PriceConsumerV3  // Generic contract binding to set the session for
	CallOpts     bind.CallOpts     // Call options to use throughout this session
	TransactOpts bind.TransactOpts // Transaction auth options to use throughout this session
}

// PriceConsumerV3CallerSession is an auto generated read-only Go binding around an Ethereum contract,
// with pre-set call options.
type PriceConsumerV3CallerSession struct {
	Contract *PriceConsumerV3Caller // Generic contract caller binding to set the session for
	CallOpts bind.CallOpts          // Call options to use throughout this session
}

// PriceConsumerV3TransactorSession is an auto generated write-only Go binding around an Ethereum contract,
// with pre-set transact options.
type PriceConsumerV3TransactorSession struct {
	Contract     *PriceConsumerV3Transactor // Generic contract transactor binding to set the session for
	TransactOpts bind.TransactOpts          // Transaction auth options to use throughout this session
}

// PriceConsumerV3Raw is an auto generated low-level Go binding around an Ethereum contract.
type PriceConsumerV3Raw struct {
	Contract *PriceConsumerV3 // Generic contract binding to access the raw methods on
}

// PriceConsumerV3CallerRaw is an auto generated low-level read-only Go binding around an Ethereum contract.
type PriceConsumerV3CallerRaw struct {
	Contract *PriceConsumerV3Caller // Generic read-only contract binding to access the raw methods on
}

// PriceConsumerV3TransactorRaw is an auto generated low-level write-only Go binding around an Ethereum contract.
type PriceConsumerV3TransactorRaw struct {
	Contract *PriceConsumerV3Transactor // Generic write-only contract binding to access the raw methods on
}

// NewPriceConsumerV3 creates a new instance of PriceConsumerV3, bound to a specific deployed contract.
func NewPriceConsumerV3(address common.Address, backend bind.ContractBackend) (*PriceConsumerV3, error) {
	contract, err := bindPriceConsumerV3(address, backend, backend, backend)
	if err != nil {
		return nil, err
	}
	return &PriceConsumerV3{PriceConsumerV3Caller: PriceConsumerV3Caller{contract: contract}, PriceConsumerV3Transactor: PriceConsumerV3Transactor{contract: contract}, PriceConsumerV3Filterer: PriceConsumerV3Filterer{contract: contract}}, nil
}

// NewPriceConsumerV3Caller creates a new read-only instance of PriceConsumerV3, bound to a specific deployed contract.
func NewPriceConsumerV3Caller(address common.Address, caller bind.ContractCaller) (*PriceConsumerV3Caller, error) {
	contract, err := bindPriceConsumerV3(address, caller, nil, nil)
	if err != nil {
		return nil, err
	}
	return &PriceConsumerV3Caller{contract: contract}, nil
}

// NewPriceConsumerV3Transactor creates a new write-only instance of PriceConsumerV3, bound to a specific deployed contract.
func NewPriceConsumerV3Transactor(address common.Address, transactor bind.ContractTransactor) (*PriceConsumerV3Transactor, error) {
	contract, err := bindPriceConsumerV3(address, nil, transactor, nil)
	if err != nil {
		return nil, err
	}
	return &PriceConsumerV3Transactor{contract: contract}, nil
}

// NewPriceConsumerV3Filterer creates a new log filterer instance of PriceConsumerV3, bound to a specific deployed contract.
func NewPriceConsumerV3Filterer(address common.Address, filterer bind.ContractFilterer) (*PriceConsumerV3Filterer, error) {
	contract, err := bindPriceConsumerV3(address, nil, nil, filterer)
	if err != nil {
		return nil, err
	}
	return &PriceConsumerV3Filterer{contract: contract}, nil
}

// bindPriceConsumerV3 binds a generic wrapper to an already deployed contract.
func bindPriceConsumerV3(address common.Address, caller bind.ContractCaller, transactor bind.ContractTransactor, filterer bind.ContractFilterer) (*bind.BoundContract, error) {
	parsed, err := abi.JSON(strings.NewReader(PriceConsumerV3ABI))
	if err != nil {
		return nil, err
	}
	return bind.NewBoundContract(address, parsed, caller, transactor, filterer), nil
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_PriceConsumerV3 *PriceConsumerV3Raw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _PriceConsumerV3.Contract.PriceConsumerV3Caller.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_PriceConsumerV3 *PriceConsumerV3Raw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _PriceConsumerV3.Contract.PriceConsumerV3Transactor.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_PriceConsumerV3 *PriceConsumerV3Raw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _PriceConsumerV3.Contract.PriceConsumerV3Transactor.contract.Transact(opts, method, params...)
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_PriceConsumerV3 *PriceConsumerV3CallerRaw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _PriceConsumerV3.Contract.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_PriceConsumerV3 *PriceConsumerV3TransactorRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _PriceConsumerV3.Contract.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_PriceConsumerV3 *PriceConsumerV3TransactorRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _PriceConsumerV3.Contract.contract.Transact(opts, method, params...)
}

// GetLatestPrice is a free data retrieval call binding the contract method 0x8e15f473.
//
// Solidity: function getLatestPrice() view returns(int256)
func (_PriceConsumerV3 *PriceConsumerV3Caller) GetLatestPrice(opts *bind.CallOpts) (*big.Int, error) {
	var out []interface{}
	err := _PriceConsumerV3.contract.Call(opts, &out, "getLatestPrice")

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// GetLatestPrice is a free data retrieval call binding the contract method 0x8e15f473.
//
// Solidity: function getLatestPrice() view returns(int256)
func (_PriceConsumerV3 *PriceConsumerV3Session) GetLatestPrice() (*big.Int, error) {
	return _PriceConsumerV3.Contract.GetLatestPrice(&_PriceConsumerV3.CallOpts)
}

// GetLatestPrice is a free data retrieval call binding the contract method 0x8e15f473.
//
// Solidity: function getLatestPrice() view returns(int256)
func (_PriceConsumerV3 *PriceConsumerV3CallerSession) GetLatestPrice() (*big.Int, error) {
	return _PriceConsumerV3.Contract.GetLatestPrice(&_PriceConsumerV3.CallOpts)
}

// GetLatestPriceFake is a free data retrieval call binding the contract method 0x75d0a4df.
//
// Solidity: function getLatestPriceFake() view returns(int256)
func (_PriceConsumerV3 *PriceConsumerV3Caller) GetLatestPriceFake(opts *bind.CallOpts) (*big.Int, error) {
	var out []interface{}
	err := _PriceConsumerV3.contract.Call(opts, &out, "getLatestPriceFake")

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// GetLatestPriceFake is a free data retrieval call binding the contract method 0x75d0a4df.
//
// Solidity: function getLatestPriceFake() view returns(int256)
func (_PriceConsumerV3 *PriceConsumerV3Session) GetLatestPriceFake() (*big.Int, error) {
	return _PriceConsumerV3.Contract.GetLatestPriceFake(&_PriceConsumerV3.CallOpts)
}

// GetLatestPriceFake is a free data retrieval call binding the contract method 0x75d0a4df.
//
// Solidity: function getLatestPriceFake() view returns(int256)
func (_PriceConsumerV3 *PriceConsumerV3CallerSession) GetLatestPriceFake() (*big.Int, error) {
	return _PriceConsumerV3.Contract.GetLatestPriceFake(&_PriceConsumerV3.CallOpts)
}
