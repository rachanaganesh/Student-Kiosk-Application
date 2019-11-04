-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2019 at 06:50 PM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `feedback`
--

-- --------------------------------------------------------

--
-- Table structure for table `equipment_feedback`
--

CREATE TABLE `equipment_feedback` (
  `id` int(11) NOT NULL,
  `equipment` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `commentType` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `equipmentEase` int(11) NOT NULL,
  `equipmentAbility` int(11) NOT NULL,
  `machineFit` int(11) NOT NULL,
  `naturalBodyMovement` int(11) NOT NULL,
  `reuseEquipment` int(11) NOT NULL,
  `preferCurrentModels` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `submissionDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `equipment_feedback`
--

INSERT INTO `equipment_feedback` (`id`, `equipment`, `commentType`, `equipmentEase`, `equipmentAbility`, `machineFit`, `naturalBodyMovement`, `reuseEquipment`, `preferCurrentModels`, `submissionDate`) VALUES
(88, 'assaultBikeElite', 'NEU', 5, 5, 5, 5, 5, 'na', '2018-10-31 18:20:55'),
(89, 'treadmill', 'POS', 4, 4, 4, 4, 4, 'na', '2018-10-18 19:09:40'),
(90, 'treadmill', 'NEU', 2, 2, 2, 2, 2, 'no', '2018-10-18 19:16:24'),
(91, 'treadmill', 'NEU', 2, 2, 2, 2, 2, 'no', '2018-10-18 19:17:16'),
(92, 'treadmill', 'NEU', 2, 2, 2, 2, 2, 'no', '2018-10-18 19:19:37'),
(93, 'treadmill', 'POS', 2, 2, 2, 2, 2, 'no', '2018-10-18 20:32:07'),
(94, 'climbhill', 'POS', 5, 5, 5, 5, 5, 'na', '2018-10-18 20:32:42'),
(95, 'octaneBike', 'NEU', 3, 3, 3, 3, 3, 'na', '2018-10-30 18:54:47'),
(96, 'arcTrainer', 'NEU', 2, 2, 2, 2, 2, 'no', '2018-10-30 18:56:06'),
(97, 'matrixTreadmill', 'NEU', 3, 3, 3, 3, 3, 'na', '2018-10-30 18:56:21'),
(98, 'climbermill', 'NEU', 4, 4, 4, 4, 4, 'na', '2018-10-30 18:56:37'),
(99, 'lifeFitnessRower', 'NEU', 3, 3, 3, 3, 3, 'na', '2018-10-30 18:57:10'),
(100, 'lifeFitnessTreadmill', 'NEU', 4, 4, 4, 4, 4, 'yes', '2018-10-30 18:57:26'),
(101, 'selfPoweredTreadmill', 'NEU', 3, 3, 3, 3, 3, 'no', '2018-10-30 18:57:42');

-- --------------------------------------------------------

--
-- Table structure for table `equipment_feedback2`
--

CREATE TABLE `equipment_feedback2` (
  `id` int(11) NOT NULL,
  `equipment` varchar(100) NOT NULL,
  `commentQuality` varchar(50) NOT NULL,
  `equipmentEase` int(11) NOT NULL,
  `equipmentAbility` int(11) NOT NULL,
  `machineFit` int(11) NOT NULL,
  `naturalBodyMovement` int(11) NOT NULL,
  `reuseEquipment` int(11) NOT NULL,
  `preferCurrentModels` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- Dumping data for table `equipment_feedback2`
--

INSERT INTO `equipment_feedback2` (`id`, `equipment`, `commentQuality`, `equipmentEase`, `equipmentAbility`, `machineFit`, `naturalBodyMovement`, `reuseEquipment`, `preferCurrentModels`) VALUES
(1, 'climbhill', 'POS', 1, 1, 1, 1, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `usu_feedback`
--

CREATE TABLE `usu_feedback` (
  `id` int(11) NOT NULL,
  `commentType` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customerType` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `about` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phoneNumber` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `followUp` tinyint(4) NOT NULL DEFAULT '0',
  `submittedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `interaction` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foodService` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `usu_feedback`
--

INSERT INTO `usu_feedback` (`id`, `commentType`, `firstName`, `lastName`, `email`, `customerType`, `about`, `department`, `phoneNumber`, `comment`, `followUp`, `submittedOn`, `interaction`, `foodService`) VALUES
(34, 'NEU', 'firstName', 'LastName', 'testing@test.com', 'ST', 'facility', '', '', 'sdfasddfas', 0, '2019-05-28 18:14:54', '', ''),
(35, 'NEU', 'firstName', 'lasttest', 'test@test.com', 'AL', 'staff-Interaction', '', '', 'dbfhadfgbs', 0, '2019-05-28 18:15:38', 'interactionOccured', ''),
(36, 'NEU', 'firsttesting', 'lasttest', 'test@test.com', 'FA', 'department-office', 'maxson-center', '', 'test', 0, '2019-05-28 18:16:07', '', ''),
(37, 'NEG', 'fd', 'ds', 'rach@gmail.com', 'FA', 'food-services', '', '', 'test', 0, '2019-05-28 18:46:57', '', 'Robeks'),
(38, 'POS', 'firsttesting', 'LastName', 'rachanaganesh95@gmail.com', 'FA', 'staff-Interaction', '', '562-521-3218', 'test', 1, '2019-05-28 18:51:48', 'test', ''),
(39, 'POS', 'namratha', 'lomte', 'namratha@gmail.com', 'ST', 'department-office', 'student-life-development', '', 'feedback works', 0, '2019-05-29 23:09:12', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tech_day_survey`
--

CREATE TABLE `tech_day_survey` (
  `id` int(11) NOT NULL,
  `college` varchar(500) NOT NULL,
  `websites` varchar(500) NOT NULL,
  `infoSource` varchar(500) NOT NULL,
  `newsLetterSignUp` tinyint(4) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `submittedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- Dumping data for table `tech_day_survey`
--

INSERT INTO `tech_day_survey` (`id`, `college`, `websites`, `infoSource`, `newsLetterSignUp`, `firstName`, `email`, `submittedOn`) VALUES
(28, 'arts', ' siteCorporate siteGovernment', ' infoCorporate infoFliers', 1, 'n', 'n@n.com', '2018-11-06 19:21:03'),
(29, 'bussinessAdmin', ' siteCorporate siteGovernment siteSRWC siteMedia', ' infoCorporate infoFliers infoWordOfMouth', 1, 'asdf', 'n@n.com', '2018-11-06 19:26:13'),
(30, 'continuingAndPersonal', ' siteCorporate siteGovernment siteSRWC siteMedia', ' infoCorporate infoFliers infoWordOfMouth', 0, '', '', '2018-11-06 19:27:07'),
(31, 'scienceAndMath', ' siteCorporate siteGovernment siteSRWC siteMedia none', ' websites printFliers friends socialMedia Not Specified', 1, 'n', 'n@n.com', '2018-11-06 21:19:38'),
(32, 'scienceAndMath', '', ' notCaring', 0, '', '', '2018-11-06 21:23:34'),
(33, 'scienceAndMath', '', '', 0, '', '', '2018-11-06 21:27:56'),
(34, 'liberalArts', '', '', 0, '', '', '2018-11-06 21:30:07'),
(35, 'scienceAndMath', '', '', 0, '', '', '2018-11-06 21:31:17'),
(36, 'scienceAndMath', ' siteSRWC none', ' websites', 1, 'Namrata', 'namratalomte33@gmail.com', '2018-11-07 17:26:24'),
(37, 'scienceAndMath', ' none', ' websites friends', 0, '', '', '2018-11-07 17:29:58'),
(38, 'bussinessAdmin', 'on on on', 'on on on', 0, '', '', '2018-11-07 17:45:45'),
(39, 'scienceAndMath', 'on on', 'on on', 0, '', '', '2018-11-07 17:48:24');

-- --------------------------------------------------------

--
-- Table structure for table `temp`
--

CREATE TABLE `temp` (
  `equipment` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- Dumping data for table `temp`
--

INSERT INTO `temp` (`equipment`) VALUES
('test'),
('NEU');

-- --------------------------------------------------------

--
-- Table structure for table `temp12`
--

CREATE TABLE `temp12` (
  `id` int(11) NOT NULL,
  `college` varchar(100) NOT NULL,
  `websites` varchar(100) NOT NULL,
  `infoSource` varchar(100) NOT NULL,
  `newsLetterSignUp` tinyint(1) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `submittedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- Dumping data for table `temp12`
--

INSERT INTO `temp12` (`id`, `college`, `websites`, `infoSource`, `newsLetterSignUp`, `firstName`, `email`, `submittedOn`) VALUES
(1, 'liberalArts', 'on on', 'on on', 0, '', '', '2018-11-07 17:54:42'),
(2, 'liberalArts', 'on on', 'on on', 0, '', '', '2018-11-07 17:56:30'),
(3, 'liberalArts', 'on on on on', 'on on on on on', 0, '', '', '2018-11-07 17:57:48'),
(4, 'scienceAndMath', 'on on on on', 'on on on on on', 0, '', '', '2018-11-07 18:00:25'),
(5, 'scienceAndMath', 'on on', 'on on', 0, '', '', '2018-11-07 18:00:47'),
(6, 'scienceAndMath', 'on on', 'on on', 0, '', '', '2018-11-07 18:01:32'),
(7, 'engineering', 'on on', 'on on', 0, '', '', '2018-11-07 18:02:03'),
(8, 'scienceAndMath', 'on on', 'on on', 0, '', '', '2018-11-07 18:02:35'),
(9, 'scienceAndMath', 'on on', 'on on', 0, '', '', '2018-11-07 18:03:09'),
(10, 'continuingAndPersonal', 'on', 'on on', 0, '', '', '2018-11-07 18:03:47'),
(11, 'continuingAndPersonal', 'on', 'on', 0, '', '', '2018-11-07 18:04:13'),
(12, 'continuingAndPersonal', 'on on', 'corporate: on gov: corporate: on srwc: corporate: on 22media: corporate: on', 0, '', '', '2018-11-07 18:10:59'),
(13, 'scienceAndMath', 'on on', 'corporate: on gov: on srwc:  22media: ', 0, '', '', '2018-11-07 18:12:15'),
(14, 'continuingAndPersonal', 'on on', 'corporate: on gov: on srwc:  22media: ', 0, '', '', '2018-11-07 18:12:46');

-- --------------------------------------------------------

--
-- Table structure for table `testform`
--

CREATE TABLE `testform` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `equipment_feedback`
--
ALTER TABLE `equipment_feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `equipment_feedback2`
--
ALTER TABLE `equipment_feedback2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usu_feedback`
--
ALTER TABLE `usu_feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tech_day_survey`
--
ALTER TABLE `tech_day_survey`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `temp12`
--
ALTER TABLE `temp12`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testform`
--
ALTER TABLE `testform`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `equipment_feedback`
--
ALTER TABLE `equipment_feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `equipment_feedback2`
--
ALTER TABLE `equipment_feedback2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `usu_feedback`
--
ALTER TABLE `usu_feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `tech_day_survey`
--
ALTER TABLE `tech_day_survey`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `temp12`
--
ALTER TABLE `temp12`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
