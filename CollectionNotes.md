Methods
addStrat_col nonpayable (uint256,uint256,uint256)
adds a new startegy to the specific collection
only use to add a new strategy, it will revert if the strategy is already present

Parameters
uint256 \_cId: collection id to add a streatgy to
uint256 \_sId: id of strategy to add
uint256 \_ratio: ratio of new startegy

addStrat_col nonpayable (uint256,uint256[],uint256[])
adds multiple new startegies to the specific collection
reverts if any sId is present in the collection
Parameters
uint256 \_cId: collection id to add a streatgy to
uint256[] \_sIds: array of startegy ids to add
uint256[] \_ratios: ratios of new startegies

- Theloume 2 ksexorista?

enterStrat_col nonpayable (uint256,uint256,uint256,address,uint256)
enters assest to a strategy within a collection
Parameters
uint256 \_cId: collection id
uint256 \_sId: strategy id to add the asset to
uint256 \_amount: amount to enter
address \_token: token
uint256 \_minShare: the minimum shares to be enetered

enter_col nonpayable (uint256,uint256,address,uint256[])
enters assest to a collection
Parameters
uint256 \_cId: collection id to add the asset to
uint256 \_amount: amount to enter
address \_token: token
uint256[] \_minShares: the minimum shares to be enetered

exitStrat_col nonpayable (uint256,uint256,uint256,address,uint256)
exits a strategy from withitn a collection in a specific token
Parameters
uint256 \_cId: collection id to exit from
uint256 \_sId: strategy id to exit from
uint256 \_amount: amount to exit
address \_token: token
uint256 \_minAmount: minium amount to receive
Return Values
uint256 minAmount

exit_col nonpayable (uint256,uint256,address,uint256[])
exits a collection returning the assets of each startegy
Parameters
uint256 \_cId: collection id to exit from
uint256 \_amount: amount to exit
address \_token
uint256[] \_minAmounts: minium amount to receive
Return Values
uint256[] minAmounts

exit_col nonpayable (uint256,uint256,address,uint256)
exits a collection in a specific token
Parameters
uint256 \_cId: collection id to exit from
uint256 \_amount: amount to exit
address \_token: token
uint256 \_minAmount: minium amount to receive
Return Values
uint256 minAmount

getBalance_col nonpayable (uint256)
gets the strategy balances of a collection
Parameters
uint256 \_cId: collection id
Return Values
uint256[] balances: array of collection ids

getCollectionNo_col nonpayable ()
gets the number of collections
Return Values
uint256 \_length: number of collections in the system

getCollection_col nonpayable (uint256)
gets the details of a collection
Parameters
uint256 \_cId: collection id
Return Values
tuple \_collection: the details of a collection

getCollections_col nonpayable (uint256[])
gets the details of multiple collections
Parameters
uint256[] \_cId: array of collection ids
Return Values
tuple[] \_collections: array of collections

getUserCollectionIds_col nonpayable (address)
gets the collections a user has created
Parameters
address \_user: user address
Return Values
uint256[] \_cIds: array of collection ids

new_col nonpayable (uint256[],uint256[])
creates a new collection
Parameters
uint256[] \_sIds: list of strategy ids which will be part of this collection
uint256[] \_ratios: list of ratios for each stratgy, order should be the same as \_strat
Return Values
uint256 cId: the id of the created collection (index starting from 1)

rebalance_col nonpayable (uint256)
rebalances the collection to match the ratios in sDNOD value
this function removes the assets from the startegies, converts them to sDNOD and then reinserts to the startegy based on the collection ratio
Parameters
uint256 \_cId: collection id to rebelance

removeStrat_col nonpayable (uint256,uint256,address,uint256)
removes asset from strategy from the specific collection and returns the funds in the selected token
Parameters
uint256 \_cId: collection id to remove startegy
uint256 \_sId: index of the strategy to remove
address \_token: token to return the startegy assets
uint256 \_amount: amount of token in shares to take out
Return Values
uint256 amount: the amount of token returned

removeStrat_col nonpayable (uint256,uint256)
removes a strategy from the specific collection
removal of a startegy will trigger rebalancing of start
Parameters
uint256 \_cId: collection id to remove startegy
uint256 \_sId: index of the strategy to remove
updateRatio_col nonpayable (uint256,uint256,uint256)

update the ratio of a specific startegy inthe collection
reverts if sId is not present in the collection
Parameters
uint256 \_cId: collection id to update the ratio
uint256 \_sId: strategy id to update the ratio
uint256 \_ratio: new ratio

updateRatios_col nonpayable (uint256,uint256[],uint256[])
update the ratios of multiple startegies in the collection
reverts if any sId is not present in the collection
Parameters
uint256 \_cId: collection id to update the ratios
uint256[] \_sIds: array of strategy index
uint256[] \_ratios: new ratios
