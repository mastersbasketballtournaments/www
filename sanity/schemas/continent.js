export default {
	 title: 'Continent'
	,name: 'continent'
	,type: 'document'
	,fields: [
		{
			 title: 'Continent'
			,name: 'name'
			,type: 'string'
		}
		,{
			 title: 'Sort Order'
			,name: 'sortOrder'
			,type: 'number'
		}
	]
	,orderings: [
		{
			title: 'Order',
			name: 'order',
			by: [
				{
					field: 'sortOrder'
					,direction: 'asc'
				}
			]
		}
	]
}
