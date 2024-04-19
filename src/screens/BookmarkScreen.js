import React from 'react';
import {Text, View, Button, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeBookmark} from '../actions/articleAction';

export default function BookmarkScreen() {
  const dispatch = useDispatch();
  const bookmarks = useSelector(state => state.articles);

  const bookmarkedArticles = bookmarks?.filter(bookmark => bookmark.bookmarked);

  const handleRemoveBookmark = id => {
    dispatch(removeBookmark(id));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {bookmarkedArticles?.map(bookmark => (
          <View key={bookmark.id} style={styles.articleContainer}>
            <Text style={styles.title}>{bookmark.title}</Text>
            <Text>{bookmark.body}</Text>
            <Text>Created by: {bookmark.userId}</Text>
            <Button
              title="Remove Bookmark"
              onPress={() => handleRemoveBookmark(bookmark.id)}
              color="red"
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  articleContainer: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
});
