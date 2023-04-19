BEGIN;

INSERT INTO users(username, avatar, email, password) VALUES ('ahmedirheem', 'ddd', 'ahmed@gmail.com', 'ahmed123');
INSERT INTO communities(name, avatar, members, description) VALUES ('r/coding', 'https://play-lh.googleusercontent.com/zWYGIu_Jj_qBUII-XAiIgKHpglVffu891JXh_Wa8-FLi7Su1u6nqM9OXpKZxc7h3sWnJ', 1025, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos placeat doloribus soluta mollitia. Reiciendis repudiandae autem itaque earum, suscipit commodi.');
INSERT INTO communities(name, avatar, members, description) VALUES ('r/programming', 'https://play-lh.googleusercontent.com/zWYGIu_Jj_qBUII-XAiIgKHpglVffu891JXh_Wa8-FLi7Su1u6nqM9OXpKZxc7h3sWnJ', 1025, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos placeat doloribus soluta mollitia. Reiciendis repudiandae autem itaque earum, suscipit commodi.');
INSERT INTO communities(name, avatar, members, description) VALUES ('r/javascript', 'https://play-lh.googleusercontent.com/zWYGIu_Jj_qBUII-XAiIgKHpglVffu891JXh_Wa8-FLi7Su1u6nqM9OXpKZxc7h3sWnJ', 1025, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos placeat doloribus soluta mollitia. Reiciendis repudiandae autem itaque earum, suscipit commodi.');

COMMIT;