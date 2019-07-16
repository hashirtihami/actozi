-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2019 at 01:41 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `actozi`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customerId` int(11) NOT NULL,
  `fName` char(1) DEFAULT NULL,
  `lName` char(1) DEFAULT NULL,
  `email` char(1) DEFAULT NULL,
  `hashCode` char(1) DEFAULT NULL,
  `address` char(1) DEFAULT NULL,
  `city` char(1) DEFAULT NULL,
  `postalCode` char(1) DEFAULT NULL,
  `phone` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orderproduct`
--

CREATE TABLE `orderproduct` (
  `orderProductId` int(11) NOT NULL,
  `orderId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `productId` int(11) NOT NULL,
  `category` char(15) DEFAULT NULL,
  `name` char(40) DEFAULT NULL,
  `desc` char(100) DEFAULT NULL,
  `url` char(255) DEFAULT NULL,
  `price` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productId`, `category`, `name`, `desc`, `url`, `price`) VALUES
(26, 'Tshirt', 'Captain America Tshirt', 'Welcome to the Avengers', 'https://lobcede.be/6674-large_default/captain-america-t-shirt-in-a-tube-shield-distressed-xxl.jpg', 999),
(27, 'Tshirt', 'Ironman Tshirt', 'Welcome to the Avengers', 'https://www.dhresource.com/0x0s/f2-albu-g5-M01-72-D7-rBVaJFhbmYOAJCkwAAESLnz4nVI981.jpg/iron-man-tony-stark-t-shirt-marvel-the-movie.jpg', 999),
(28, 'Tshirt', 'Captain America Tshirt', 'Welcome to the Avengers', 'https://lobcede.be/6674-large_default/captain-america-t-shirt-in-a-tube-shield-distressed-xxl.jpg', 999),
(29, 'Tshirt', 'Ironman Tshirt', 'Welcome to the Avengers', 'https://www.dhresource.com/0x0s/f2-albu-g5-M01-72-D7-rBVaJFhbmYOAJCkwAAESLnz4nVI981.jpg/iron-man-tony-stark-t-shirt-marvel-the-movie.jpg', 999),
(30, 'Tshirt', 'Captain America Tshirt', 'Welcome to the Avengers', 'https://lobcede.be/6674-large_default/captain-america-t-shirt-in-a-tube-shield-distressed-xxl.jpg', 999),
(31, 'Tshirt', 'Ironman Tshirt', 'Welcome to the Avengers', 'https://www.dhresource.com/0x0s/f2-albu-g5-M01-72-D7-rBVaJFhbmYOAJCkwAAESLnz4nVI981.jpg/iron-man-tony-stark-t-shirt-marvel-the-movie.jpg', 999),
(32, 'Tshirt', 'Captain America Tshirt', 'Welcome to the Avengers', 'https://lobcede.be/6674-large_default/captain-america-t-shirt-in-a-tube-shield-distressed-xxl.jpg', 999),
(33, 'Tshirt', 'Ironman Tshirt', 'Welcome to the Avengers', 'https://www.dhresource.com/0x0s/f2-albu-g5-M01-72-D7-rBVaJFhbmYOAJCkwAAESLnz4nVI981.jpg/iron-man-tony-stark-t-shirt-marvel-the-movie.jpg', 999);

-- --------------------------------------------------------

--
-- Table structure for table `productsize`
--

CREATE TABLE `productsize` (
  `productSizeId` int(11) NOT NULL,
  `sizeId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `sizeId` int(11) NOT NULL,
  `name` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customerId`);

--
-- Indexes for table `orderproduct`
--
ALTER TABLE `orderproduct`
  ADD PRIMARY KEY (`orderProductId`),
  ADD KEY `FK` (`orderId`,`productId`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productId`);

--
-- Indexes for table `productsize`
--
ALTER TABLE `productsize`
  ADD PRIMARY KEY (`productSizeId`),
  ADD KEY `FK` (`sizeId`,`productId`);

--
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`sizeId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customerId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderproduct`
--
ALTER TABLE `orderproduct`
  MODIFY `orderProductId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `sizeId` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
