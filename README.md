# planeskeeper-client

Back of magic card image. https://mtg.gamepedia.com/Card_back
playing mat image. https://images.search.yahoo.com/yhs/search;_ylt=Awr9Jg1IhzFbAW8AM2cPxQt.?p=magic+card+table+background&fr=yhs-iba-syn&fr2=piv-web&hspart=iba&hsimp=yhs-syn&type=asbw_7187_CHW_US_tid1103#id=21&iurl=https%3A%2F%2Faz616578.vo.msecnd.net%2Ffiles%2F2016%2F06%2F25%2F636024823157923300797171718_39307_magic_the_gathering.jpg&action=click


//template for collection table creation
CREATE TABLE 
cards (
card_id SERIAL PRIMARY KEY,
color VARCHAR(255),
name VARCHAR(255),
api_card_id VARCHAR(255),
image_url VARCHAR(255),
body VARCHAR(255),
rarity VARCHAR(255),
set VARCHAR(255)
);

CREATE TABLE 
users_cards (
user_id VARCHAR(255),
card_id VARCHAR(255),
ammount VARCHAR(255)
);

#CREDITS
