export default {
	 title: 'Competition'
	,name: 'competition'
	,type: 'document'
	,fields: [
		 { name: 'gender' ,type: 'string' }
		,{ title: 'Age Over' ,name: 'ageOver' ,type: 'number'
		}
	]
	,preview: {
		 select: {  title: 'gender' ,age: 'ageOver' }
		,prepare( selection ) {
			const { title, age } = selection

			return {
				 title: `${title} ${age}+`
			}
		}
	}
	,orderings: [
		{
			 title: 'Gender / Age'
			,name: 'label'
			,by: [
				 { field: 'gender' ,direction: 'asc' }
				,{ field: 'ageOver' ,direction: 'asc' }
			]
		}
	]
}
