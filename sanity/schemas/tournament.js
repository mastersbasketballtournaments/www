export default {
	name: 'tournament',
	type: 'document',
	title: 'Tournament',
	fields: [
		{
			 title: 'Tournament'
			,name: 'name'
			,type: 'string'
		}
		,{
			 title: 'Start Date'
			,name: 'startDate'
			,type: 'date'
		}
		,{
			 title: 'End Date'
			,name: 'endDate'
			,type: 'date'
		}
		,{
			 name: 'contact'
			,type: 'string'
		}
		,{
			 title: 'Email address'
			,name: 'emailAddress'
			,type: 'string'
		}
		,{
			 name: 'website'
			,type: 'string'
		}
		,{
			 name: 'facebook'
			,type: 'string'
		}
		,{
			 name: 'twitter'
			,type: 'string'
		}
		,{
			 name: 'instagram'
			,type: 'string'
		}
		,{
			 title: 'Competitions'
			,name: 'competition'
			,type: 'array'
			,of: [
				{
					type: 'reference',
					to: [
						{ type: 'competition' }
					]
				}
			]
		}
		,{
			 name: 'continent'
			,type: 'reference'
			,to: [
				{
					type: 'continent'
				}
			]
		}
		,{
			 name: 'country'
			,type: 'string'
		}
		,{
			 name: 'location'
			,type: 'string'
		}
	]
	,orderings: [
		{
			title: 'Name',
			name: 'name',
			by: [
				{
					field: 'name'
					,direction: 'asc'
				}
			]
		}
		,{
			title: 'Start Date',
			name: 'startDate',
			by: [
				{
					field: 'startDate'
					,direction: 'asc'
				}
			]
		}
	]
}
