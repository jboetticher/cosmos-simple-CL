package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/jboetticher/simpleclcosmos/x/clprice/types"
)

func CmdCreateSentPrice() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-sentPrice [priceID] [name] [chain]",
		Short: "Creates a new sentPrice",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsPriceID := string(args[0])
			argsName := string(args[1])
			argsChain := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateSentPrice(clientCtx.GetFromAddress().String(), string(argsPriceID), string(argsName), string(argsChain))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateSentPrice() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-sentPrice [id] [priceID] [name] [chain]",
		Short: "Update a sentPrice",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsPriceID := string(args[1])
			argsName := string(args[2])
			argsChain := string(args[3])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSentPrice(clientCtx.GetFromAddress().String(), id, string(argsPriceID), string(argsName), string(argsChain))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteSentPrice() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-sentPrice [id] [priceID] [name] [chain]",
		Short: "Delete a sentPrice by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteSentPrice(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
