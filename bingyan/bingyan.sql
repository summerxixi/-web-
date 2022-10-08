/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 50719
 Source Host           : localhost:3306
 Source Schema         : bingyan

 Target Server Type    : MySQL
 Target Server Version : 50719
 File Encoding         : 65001

 Date: 06/10/2022 21:34:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orginId` int(255) DEFAULT NULL,
  `toId` int(255) DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `read` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '0 已阅 1未阅',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES (1, 1, 2, '你吃饭了吗', '0');
INSERT INTO `message` VALUES (2, 2, 1, '好饿啊 想吃东西', '0');
INSERT INTO `message` VALUES (3, 1, 2, '哈? 你还没吃饭啊 都这么晚了', '0');
INSERT INTO `message` VALUES (4, 2, 1, '哎 今天学习任务好重 呜呜 难受', '0');
INSERT INTO `message` VALUES (5, 1, 2, '额 好吧 反正你注意休息', '0');
INSERT INTO `message` VALUES (8, 1, 2, '发个消息给你', '0');
INSERT INTO `message` VALUES (9, 1, 2, '起床了吗 今天要早起啊', '0');
INSERT INTO `message` VALUES (10, 1, 2, '哎 真的好累啊 ', '0');
INSERT INTO `message` VALUES (11, 1, 2, '你现在还在学习吗\n', '0');
INSERT INTO `message` VALUES (12, 1, 2, '不想学了..\n', '0');
INSERT INTO `message` VALUES (13, 2, 1, '没事 加油 我和你一起\n', '0');
INSERT INTO `message` VALUES (14, 1, 2, '那真好 嘿嘿\n', '0');
INSERT INTO `message` VALUES (15, 2, 1, '我也是觉得 有你陪着我真好', '0');
INSERT INTO `message` VALUES (16, 2, 1, '啦啦啦\n', '0');
INSERT INTO `message` VALUES (17, 1, 2, '。。。', '0');
INSERT INTO `message` VALUES (18, 1, 2, '我看看哈', '0');
INSERT INTO `message` VALUES (19, 2, 1, '有红点 可以了', '0');
INSERT INTO `message` VALUES (20, 2, 1, '啊啊\n', '0');
INSERT INTO `message` VALUES (21, 2, 1, '我给你说哈', '0');
INSERT INTO `message` VALUES (22, 2, 1, 's', '0');
INSERT INTO `message` VALUES (23, 2, 1, '哈哈哈 行了\n', '0');
INSERT INTO `message` VALUES (24, 2, 1, '我给你发个消息\n', '0');
INSERT INTO `message` VALUES (25, 2, 1, 'aa', '0');
INSERT INTO `message` VALUES (26, 2, 1, 'aaa', '0');
INSERT INTO `message` VALUES (27, 2, 1, '去死吧 傻逼\n', '0');
INSERT INTO `message` VALUES (28, 1, 2, '你是个大傻逼\n', '0');
INSERT INTO `message` VALUES (29, 1, 4, 'hhhhh', '0');
INSERT INTO `message` VALUES (30, 1, 4, '大傻逼', '0');
INSERT INTO `message` VALUES (31, 4, 1, '恩恩额', '0');
INSERT INTO `message` VALUES (32, 2, 1, '啥啥啥', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '洪崖洞浩子', 'https://img2.baidu.com/it/u=3063150409,1317910449&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=501', '123');
INSERT INTO `user` VALUES (2, '亭亭玉立', 'https://img2.baidu.com/it/u=80407733,3792519091&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', '123');
INSERT INTO `user` VALUES (3, '方方是我啊', 'https://img1.baidu.com/it/u=3673913149,3563580515&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=501', '123');
INSERT INTO `user` VALUES (4, 'xiaohong', 'https://img0.baidu.com/it/u=1477884132,138131308&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400', '123');

SET FOREIGN_KEY_CHECKS = 1;
