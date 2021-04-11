// This example code is designed to quickly deploy an example contract using Remix.

pragma solidity 0.8.3;

import "AggregatorV3Interface.sol";

contract PriceConsumerV3 {

    /**
     * Network: Kovan
     * Aggregator: ETH/USD
     * Address: 0x9326BFA02ADD2366b30bacB125260Af641031331
     */
    constructor() public {
        priceFeeds["ETH/USD"] = AggregatorV3Interface(0x9326BFA02ADD2366b30bacB125260Af641031331);
        owner = msg.sender;
    }
    
    // the owner of the smart contract
    address public owner;
    
    // all of the price feeds
    mapping(string => AggregatorV3Interface) internal priceFeeds;
    
    
    
    // returns the latest price of specific aggregator
    function getLatestPrice(string memory aggregator) public view returns (int) {
        AggregatorV3Interface _feed = priceFeeds[aggregator];
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = _feed.latestRoundData();

        return price;
    }
    
    // inserts a new aggregator
    function insertAggregator(address _aggregator, string memory _key) public {
        require(msg.sender == owner);
        priceFeeds[_key] = AggregatorV3Interface(_aggregator);
    }
    
}
