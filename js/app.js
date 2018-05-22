const url = "https://jsonplaceholder.typicode.com/posts";

const vm = new Vue({
	el: '#table-data',
    data: {
    	posts: [],
      search: '',
      sort: '',
      options: [
        { label: 'Ascending', value: 'asc' },
        { label: 'Descending', value: 'desc' },
      ]
    },
    mounted() {
      axios.get(url).then(response => {
        this.posts = response.data;
      })
    },
		computed: {
			filteredPosts() {
					return _.filter(this.posts, ['title', this.search.toLowerCase()]);
					
				}

		// filteredPosts() {
		// 		return this.posts.filter(post => {
		// 			return post.title.toLowerCase().includes(this.search.toLowerCase())
		// 		});
		// 	}
		}

});
