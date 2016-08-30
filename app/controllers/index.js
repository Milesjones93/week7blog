import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addNewPost(){
			let post = this.store.createRecord( 'post', {
				isEditing: false,
				title: this.get( 'newPostTitle' ),
				body: this.get( 'newPostBody'),
				createdAt: Date.now()
			} );

			post.save();

			this.set( 'newPostTitle', '' );
			this.set( 'newPostBody', '' );
		},

		savePost(post){
			post.set( 'isEditing', false );
			post.save();
		},

		editPost( post ){
			post.set( 'isEditing', true );

		},

		deletePost( post ){
			post.deleteRecord();
			post.save();

		} 
	}
});
