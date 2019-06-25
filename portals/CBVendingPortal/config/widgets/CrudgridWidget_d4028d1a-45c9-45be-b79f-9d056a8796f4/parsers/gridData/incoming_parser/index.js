/**
* @param {context} ctx - Object containing data and model information for this item.
*/
parser = (ctx) => {
  /** @type {GridSourceObj} */
  var gridData = {
    keyColumn: "item_id", 
    data: [], 
    columns: ctx.dsModel.getCRUDSchema(), 
    count: ctx.dsModel.getCount()
  };

  for (var row of ctx.datasource) {
    gridData.data.push(row.data)
  }

  return gridData;
}