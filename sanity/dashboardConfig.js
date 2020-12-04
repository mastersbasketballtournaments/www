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
						,apiId: process.env.SANITY_STUDIO_NETLIFY_API_ID
						,buildHookId: process.env.SANITY_STUDIO_NETLIFY_BUILD_HOOK
					}
				]
			}
		}
	]
}
