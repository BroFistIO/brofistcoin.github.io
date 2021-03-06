"use strict";

/**
 * Card deck.
 */

Game.deck = [
	{"id": 1, "name": "Hard to swallow pills", "ranks": [1,5,4,1], "level": 1},
	{"id": 2, "name": "Earth Sandwich", "ranks": [5,3,1,1], "level": 1},
	{"id": 3, "name": "Roll Safe", "ranks": [1,5,3,3], "level": 1},
	{"id": 4, "name": "Y U NO", "ranks": [6,2,1,1], "level": 1},
	{"id": 5, "name": "Excuse me WTF", "ranks": [2,5,3,1], "level": 1},
	{"id": 6, "name": "Skidaddle Skidoodle", "ranks": [2,4,1,4], "level": 1},
	{"id": 7, "name": "Galaxy Brain", "ranks": [1,1,5,4], "level": 1},
	{"id": 8, "name": "Harold", "ranks": [3,1,5,2], "level": 1},
	{"id": 9, "name": "Car Salesman", "ranks": [2,1,1,6], "level": 1},
	{"id": 10, "name": "Peek", "ranks": [4,3,2,4], "level": 1},
	{"id": 11, "name": "Oro", "ranks": [2,6,1,2], "level": 1},
	{"id": 12, "name": "Kazoo Kid", "ranks": [7,1,1,3], "level": 2},
	{"id": 13, "name": "Mike", "ranks": [6,3,2,2], "level": 2},
	{"id": 14, "name": "Papa", "ranks": [5,4,3,3], "level": 2},
	{"id": 15, "name": "Ainsley", "ranks": [6,3,1,4], "level": 2},
	{"id": 16, "name": "Tide Pod", "ranks": [3,3,4,5], "level": 2},
	{"id": 17, "name": "Gru", "ranks": [5,5,3,2], "level": 2},
	{"id": 18, "name": "Teleporting Naked Guy", "ranks": [5,5,1,3], "level": 2},
	{"id": 19, "name": "Jeremy", "ranks": [5,2,2,5], "level": 2},
	{"id": 20, "name": "Thanos Car", "ranks": [4,2,4,5], "level": 2},
	{"id": 21, "name": "Stephano", "ranks": [3,7,2,1], "level": 2},
	{"id": 22, "name": "Skully", "ranks": [5,3,2,5], "level": 2},
	{"id": 23, "name": "Mayo", "ranks": [6,2,6,3], "level": 3},
	{"id": 24, "name": "Piggeh", "ranks": [6,6,3,1], "level": 3},
	{"id": 25, "name": "Mr. Chair", "ranks": [3,5,5,5], "level": 3},
	{"id": 26, "name": "Is This a Pigeon?", "ranks": [7,3,5,1], "level": 3},
	{"id": 27, "name": "Stolen Bike", "ranks": [7,3,1,5], "level": 3},
	{"id": 28, "name": "Doubt", "ranks": [5,3,6,3], "level": 3},
	{"id": 29, "name": "Garbage Pockets", "ranks": [5,4,6,2], "level": 3},
	{"id": 30, "name": "Axel Voss", "ranks": [4,2,4,7], "level": 3},
	{"id": 31, "name": "Waluigi", "ranks": [6,3,2,6], "level": 3},
	{"id": 32, "name": "Cat?", "ranks": [3,4,6,4], "level": 3},
	{"id": 33, "name": "Moth", "ranks": [7,5,2,3], "level": 3},
	{"id": 34, "name": "Distracted Boyfriend", "ranks": [2,7,3,6], "level": 4},
	{"id": 35, "name": "Flat Earth", "ranks": [6,5,5,4], "level": 4},
	{"id": 36, "name": "Pingu", "ranks": [4,7,6,2], "level": 4},
	{"id": 37, "name": "T-Series", "ranks": [2,3,7,6], "level": 4},
	{"id": 38, "name": "Aokigahara Paul", "ranks": [1,7,6,4], "level": 4},
	{"id": 39, "name": "Dat Boi", "ranks": [7,6,3,1], "level": 4},
	{"id": 40, "name": "Doge", "ranks": [7,4,4,4], "level": 4},
	{"id": 41, "name": "OK Symbol", "ranks": [3,6,7,3], "level": 4},
	{"id": 42, "name": "Kanye, Lil Pump", "ranks": [6,3,2,7], "level": 4},
	{"id": 43, "name": "Isopod", "ranks": [4,6,5,5], "level": 4},
	{"id": 44, "name": "Drake", "ranks": [7,3,5,4], "level": 4},
	{"id": 45, "name": "Strong PewDiePie", "ranks": [6,5,5,6], "level": 5},
	{"id": 46, "name": "Doot Doot", "ranks": [3,7,6,5], "level": 5},
	{"id": 47, "name": "Gucci Mask", "ranks": [7,3,6,5], "level": 5},
	{"id": 48, "name": "Howard", "ranks": [3,1,10,2], "level": 5},
	{"id": 49, "name": "Beaver", "ranks": [6,7,2,6], "level": 5},
	{"id": 50, "name": "Tik Tok", "ranks": [5,4,5,7], "level": 5},
	{"id": 51, "name": "In Coma", "ranks": [7,2,7,4], "level": 5},
	{"id": 52, "name": "Jilly Juice", "ranks": [7,4,2,7], "level": 5},
	{"id": 53, "name": "Polite Cat", "ranks": [5,6,3,7], "level": 5},
	{"id": 54, "name": "Lil Tay", "ranks": [4,4,6,7], "level": 5},
	{"id": 55, "name": "Bowsette and Mario", "ranks": [6,7,6,2], "level": 5},
	{"id": 56, "name": "Ben Shapiro", "ranks": [2,4,8,8], "level": 6},
	{"id": 57, "name": "Basically Monkey", "ranks": [7,4,8,3], "level": 6},
	{"id": 58, "name": "A Nazi", "ranks": [4,3,8,7], "level": 6},
	{"id": 59, "name": "Despacito", "ranks": [7,5,2,8], "level": 6},
	{"id": 60, "name": "The Bro", "ranks": [1,3,8,8], "level": 6},
	{"id": 61, "name": "Hot Dog Boss", "ranks": [8,2,2,8], "level": 6},
	{"id": 62, "name": "Grandayy", "ranks": [6,5,8,4], "level": 6},
	{"id": 63, "name": "FaZe Lampshade", "ranks": [4,6,8,5], "level": 6},
	{"id": 64, "name": "Bongo Cat HD", "ranks": [1,8,8,4], "level": 6},
	{"id": 65, "name": "Elon 420", "ranks": [6,4,5,8], "level": 6},
	{"id": 66, "name": "Johnny Dee", "ranks": [7,1,5,8], "level": 6},
	{"id": 67, "name": "Bitch Lasagna", "ranks": [8,8,4,4], "level": 7},
	{"id": 68, "name": "Dr. Phil", "ranks": [8,4,8,4], "level": 7},
	{"id": 69, "name": "The Controller", "ranks": [8,8,5,2], "level": 7},
	{"id": 70, "name": "Bongo Cat", "ranks": [5,8,6,6], "level": 7},
	{"id": 71, "name": "Hype Beast", "ranks": [8,3,6,7], "level": 7},
	{"id": 72, "name": "Pewdelia", "ranks": [8,8,3,5], "level": 7},
	{"id": 73, "name": "Martin", "ranks": [8,4,8,5], "level": 7},
	{"id": 74, "name": "Lucius & Bengt", "ranks": [5,5,7,8], "level": 7},
	{"id": 75, "name": "Funny Guys", "ranks": [6,7,8,4], "level": 7},
	{"id": 76, "name": "Obunga", "ranks": [1,7,8,7], "level": 7},
	{"id": 77, "name": "Hela", "ranks": [7,8,7,2], "level": 7},
	{"id": 78, "name": "Poppy Harlow", "ranks": [4,9,4,8], "level": 8},
	{"id": 79, "name": "Hmmm", "ranks": [9,3,6,7], "level": 8},
	{"id": 80, "name": "Zero Deaths", "ranks": [3,6,7,9], "level": 8},
	{"id": 81, "name": "Ruby", "ranks": [9,2,3,9], "level": 8},
	{"id": 82, "name": "Avatar", "ranks": [9,4,4,8], "level": 8},
	{"id": 83, "name": "Duck", "ranks": [2,4,9,9], "level": 8},
	{"id": 84, "name": "Meme Review", "ranks": [6,9,7,4], "level": 8},
	{"id": 85, "name": "The Chair", "ranks": [9,8,6,2], "level": 8},
	{"id": 86, "name": "CinnamonToastKen", "ranks": [8,2,9,6], "level": 8},
	{"id": 87, "name": "Edgar", "ranks": [5,9,1,9], "level": 8},
	{"id": 88, "name": "Maya", "ranks": [9,9,5,2], "level": 8},
	{"id": 89, "name": "Dogy", "ranks": [8,4,4,10], "level": 9},
	{"id": 90, "name": "Ugandan Knuckles", "ranks": [5,3,10,8], "level": 9},
	{"id": 91, "name": "Vegan Paul", "ranks": [7,7,10,1], "level": 9},
	{"id": 92, "name": "Stefan", "ranks": [8,5,10,3], "level": 9},
	{"id": 93, "name": "Pew News Mug", "ranks": [10,7,1,7], "level": 9},
	{"id": 94, "name": "Boar Vessel", "ranks": [7,10,4,6], "level": 9},
	{"id": 95, "name": "Zucc", "ranks": [9,2,10,4], "level": 9},
	{"id": 96, "name": "Annoyed Bird", "ranks": [7,10,2,7], "level": 9},
	{"id": 97, "name": "Thanos", "ranks": [10,6,8,2], "level": 9},
	{"id": 98, "name": "Slippy", "ranks": [3,10,1,10], "level": 9},
	{"id": 99, "name": "Dolan", "ranks": [4,10,4,9], "level": 9},
	{"id": 100, "name": "Beastmaster64", "ranks": [10,8,7,2], "level": 10},
	{"id": 101, "name": "Sive", "ranks": [6,10,7,6], "level": 10},
	{"id": 102, "name": "Brad", "ranks": [5,9,10,3], "level": 10},
	{"id": 103, "name": "PewDiePie #2", "ranks": [10,4,8,6], "level": 10},
	{"id": 104, "name": "Gloria Borger", "ranks": [9,2,6,10], "level": 10},
	{"id": 105, "name": "E", "ranks": [2,10,6,9], "level": 10},
	{"id": 106, "name": "Markiplier", "ranks": [8,6,5,10], "level": 10},
	{"id": 107, "name": "Marzia", "ranks": [4,10,10,2], "level": 10},
	{"id": 108, "name": "Youtube", "ranks": [10,3,10,3], "level": 10},
	{"id": 109, "name": "Jacksepticeye", "ranks": [6,4,9,10], "level": 10},
	{"id": 110, "name": "PewDiePie", "ranks": [10,9,4,6], "level": 10},
	{"id": 111, "name": "Alexa", "ranks": [9,10,9,10], "level": 10},
	{"id": 112, "name": "PewDiePie Car", "ranks": [7,8,8,6], "level": 9}
];