export default {
	widgets: [
		{
			name: 'netlify'
			,options: {
				title: 'Deploy to Production'
				,sites: [
					{
						title: 'Masters Basketball Tournaments'
						,name: 'mastersbasketballtournaments'
						,apiId: process.env.SANITY_TOKEN
						,buildHookId: process.env.NETLIFY_BUILD_HOOK
					}
				]
			}
		}
	]
}
