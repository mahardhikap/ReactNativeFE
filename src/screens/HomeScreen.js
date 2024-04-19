import React, {useEffect} from 'react';
import {Text, View, Button, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchArticles, toggleBookmark} from '../actions/articleAction';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  const handleToggleBookmark = id => {
    dispatch(toggleBookmark(id));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {articles?.map(article => (
          <View key={article.id} style={styles.articleContainer}>
            <Text style={styles.title}>{article.title}</Text>
            <Text>{article.body}</Text>
            <Text>Created by: {article.userId}</Text>
            <Button
              title={article.bookmarked ? 'Unbookmark' : 'Bookmark'}
              onPress={() => handleToggleBookmark(article.id)}
              color={article.bookmarked ? 'red' : 'green'}
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
