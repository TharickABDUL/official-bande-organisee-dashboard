-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bwzoakj3koo840dmsyqy-mysql.services.clever-cloud.com:3306
-- Generation Time: Oct 30, 2020 at 07:40 PM
-- Server version: 8.0.13-3
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bwzoakj3koo840dmsyqy`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertisements`
--

CREATE TABLE `advertisements` (
  `idAdvertisements` int(11) NOT NULL,
  `titleAdvertisements` varchar(255) NOT NULL,
  `shortDescription` text NOT NULL,
  `fullDescription` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `wages` int(11) DEFAULT NULL,
  `place` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `TypeOfJob` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `hourWeek` int(11) DEFAULT NULL,
  `CompaniesID` int(11) NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `advertisements`
--

INSERT INTO `advertisements` (`idAdvertisements`, `titleAdvertisements`, `shortDescription`, `fullDescription`, `wages`, `place`, `TypeOfJob`, `hourWeek`, `CompaniesID`, `image`) VALUES
(1, 'Agent Courrier numérisation (H/F)', 'Vous travaillerez au sein de l\'équipe courrier numérisation où votre activité principale sera le traitement et la numérisation du courrier entrant et l’expédition des courriers.', 'Vous travaillerez au sein de l\'équipe courrier numérisation où votre activité principale sera le traitement et la numérisation du courrier entrant et l’expédition des courriers.\r\n\r\nMissions et Activités Principales:\r\n\r\nTraitement et Numérisation du courrier entrant\r\n\r\n· Réception du courrier, Ouverture et tri du courrier en fonction de la typologie définie pour les traitements. Numérisation de tous les courriers entrants, vérification de l’intégration totale des courriers papier dans la base documentaire, suivi du bon dispatching dans les différents services.\r\n\r\n· Préparation des envois à la société d’archivage externe, recherche de documents physiques dans les envois en attente d’archivage externe et Gestion des envois à la société d’archivage externe.\r\n\r\nSuivi de la base documentaire\r\n\r\n· Suivi de la bonne tenue et de la cohérence de la base documentaire électronique.\r\n\r\n. Centralisation et traitement des demandes de recherches à la société d’archivage extérieure.\r\n\r\nExpédition des courriers sortants\r\n\r\n· Collecte du courrier auprès des différents services, Impression et envoi des cartes d’identification, Mise sous pli et affranchissement du courrier sortant (appréciation du mode d’affranchissement le plus économique selon les instructions et l’urgence des documents, regroupement des envois de cartes pour plusieurs animaux d’un même propriétaire), respect de l’heure de collecte de la poste (16h45).\r\n\r\n', 1832, 'L\'Haÿ-les-Roses (94)', 'contrat de 6 mois', 40, 1, 'https://idata.over-blog.com/1/71/26/12/Cartes-Amerique/Bahamas_02.jpg'),
(3, 'vue.js développeurs front end.', 'CompuGroup Medical est l’un des leaders mondiaux de la eSanté.\r\nAvec un chiffre d’affaires de 746 millions d’euros en 2019, ses logiciels sont conçus pour accompagner toutes les activités médicales et organisationnelles dans les cabinets médicaux.', 'Les services de CompuGroup Medical reposent sur une base Client unique de plus de 1 million de professionnels composée de médecins, dentistes, pharmacies et autres fournisseurs de services au sein des établissements de soins ambulatoires et hospitaliers.\r\n\r\nPrésent dans 18 pays et distribué dans plus de 56 pays à travers le monde, CompuGroup Medical est la société eSanté avec l’une des meilleures couvertures parmi les fournisseurs de services eSanté. Environ 5 600 Employés hautement qualifiés accompagnent ses Clients avec des solutions innovantes pour répondre aux demandes toujours plus croissantes du système de santé.', 600, 'Phuket, Thailand', 'Alternance', 25, 5, 'https://www.theprivateworld.com/wp-content/uploads/2017/06/Come-Alive-in-Bangla-Road-The-Phuket-Villas-3.jpg'),
(4, 'Développeur web & analytics', 'Au sein de l’équipe SI Web, vous participez au développement et à la maintenance opérationnelle des services Web (extranets, compte-client, abonnements en ligne…) dans un environnement LAMP.\r\nVous assurerez une veille technologique constante afin d’assurer', 'De formation supérieure en informatique, ou autodidacte expérimenté, vous justifiez d’une expérience significative sur un poste similaire de minimum 3 ans. Vous jouissez d’une bonne culture Web et êtes ouvert aux nouvelles technologies. Vous êtes curieux, engagé, rigoureux, dynamique et autonome.\r\n\r\nVous avez une bonne capacité d’analyse, êtes sensible au rendu visuel, à l’expérience utilisateur et à la sécurité des applications. Vous avez un bon niveau rédactionnel en français (orthographe et grammaire) et vous maitrisez l’anglais écrit et parlé.', 4000, 'Dubai, Burj Kalifa', 'Stage', 4, 6, 'https://whatson.ae/wp-content/uploads/2016/05/IMG_9756.jpg'),
(5, 'developpeur vue.js', 'VALENTE SECURYSTAR (http://www.securystar.com) fabricant de portes blindées, menuiseries métalliques, serrures, cylindres, clés brevetées, bandeaux ventouses, portails, grilles de protection, tous produits de métallerie…', 'VALENTE SECURYSTAR (http://www.securystar.com) fabricant de portes blindées, menuiseries métalliques, serrures, cylindres, clés brevetées, bandeaux ventouses, portails, grilles de protection, tous produits de métallerie…\n\nVous serez directement en lien avec le chef de production et le magasinier.', 2150, 'VALENTE SECURYSTAR - Thiais', 'CDI', 60, 6, 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/05/aedcbc66-ed5f-44cf-b7df-8c49122e738b/1200x680_gettyimages-1132273263.jpg'),
(6, 'Equipier H/F', 'Quand je suis arrivée la première fois chez McDonald’s, on m’avait prévenue que, en tant qu’employé de restauration, je devrai m’accrocher.', 'Quand je suis arrivée la première fois chez McDonald’s, on m’avait prévenue que, en tant qu’employé de restauration, je devrai m’accrocher. Et ça a été le cas ! Car il faut être polyvalent et réactif, c’est certain. Mais ce qui est génial c’est qu’on m’a formée dès le début. J’ai intégré une équipe soudée et solidaire, toujours là pour m’aider. On n’a jamais le temps de s’ennuyer ! Entre le comptoir, la salle et la cuisine, il y en a pour tous les goûts dans la restauration. L’important c’est d’en vouloir, d’aider les clients et, surtout, de toujours garder le sourire !\nVous serez directement en lien avec le chef de production et le magasinier.', 2150, 'VALENTE SECURYSTAR - Thiais', 'CDI', 60, 9, 'https://www.revuepolitique.fr/wp-content/uploads/2019/05/Champs-Chine.jpg'),
(7, 'Caissier H/F', 'Quand je suis arrivée la première fois chez McDonald’s, on m’avait prévenue que, en tant qu’employé de restauration, je devrai m’accrocher.', 'Quand je suis arrivée la première fois chez McDonald’s, on m’avait prévenue que, en tant qu’employé de restauration, je devrai m’accrocher. Et ça a été le cas ! Car il faut être polyvalent et réactif, c’est certain. Mais ce qui est génial c’est qu’on m’a formée dès le début. J’ai intégré une équipe soudée et solidaire, toujours là pour m’aider. On n’a jamais le temps de s’ennuyer ! Entre le comptoir, la salle et la cuisine, il y en a pour tous les goûts dans la restauration. L’important c’est d’en vouloir, d’aider les clients et, surtout, de toujours garder le sourire !\nVous serez directement en lien avec le chef de production et le magasinier.', 2150, 'VALENTE SECURYSTAR - Thiais', 'CDI', 60, 5, 'https://static.nationalgeographic.fr/files/styles/image_3200/public/huts-maldives-blue-water.ngsversion.1468523860914.adapt_.1900.1.jpg?w=1600&h=1104'),
(11, 'alternant', 'VALENTE SECURYSTAR (http://www.securystar.com) fabricant de portes blindées, menuiseries métalliques, serrures, cylindres, clés brevetées, bandeaux ventouses, portails, grilles de protection, tous produits de métallerie…', 'VALENTE SECURYSTAR (http://www.securystar.com) fabricant de portes blindées, menuiseries métalliques, serrures, cylindres, clés brevetées, bandeaux ventouses, portails, grilles de protection, tous produits de métallerie…\n\nVous serez directement en lien avec le chef de production et le magasinier.', 2150, 'VALENTE SECURYSTAR - Thiais', 'CDI', 60, 6, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwRo7xV49NcqmoQ9lrZcbUrOw80U7rucTKDQ&usqp=CAU'),
(12, 'Blockchain scientist - Panamas', 'By design, a blockchain is resistant to modification of the data. It is \"an open, distributed ledge', 'For use as a distributed ledger, a blockchain is typically managed by a peer-to-peer network collectively adhering to a protocol for inter-node communication and validating new blocks. Once recorded, the data in any given block cannot be altered retroactively without alteration of all subsequent blocks, which requires consensus of the network majority. Although blockchain records are not unalterable, blockchains may be considered secure by design and exemplify a distributed computing system with high Byzantine fault tolerance. Decentralized consensus has therefore been claimed with a blockcha', 1300, 'Panamas', 'CDD', 35, 10, 'https://www.diygenius.com/wp-content/uploads/2019/12/panama-city-nature-view.jpg'),
(13, 'Data scientist - Panamas', 'Data analyst / Data scientist. Synonymes : dataminer, data analyst, analyste de données big data. Numérique - Multimédia - Audiovisuel; Informatiqu', 'Data science is an inter-disciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from many structural and unstructured data. Data science is related to data mining, machine learning and big data', 1900, 'Panamas', 'CDD', 35, 11, 'https://media.istockphoto.com/photos/freelancer-with-an-inflatable-ring-in-the-water-in-the-pool-works-on-picture-id1155031613'),
(22, 'Employé polyvalent en restauration', 'BAGELTEIN recherche responsable adjoint H/F Dynamique et organisé, disponible semaines et week end cdi sur 25 /30heures Sous la supervision du franchisé, vous avez la responsabilité d\'un centre de profit.', 'BAGELTEIN recherche responsable adjoint H/F Dynamique et organisé, disponible semaines et week end cdi sur 25 /30heures Sous la supervision du franchisé, vous avez la responsabilité d\'un centre de profit. Garant des fondamentaux Bagelstein, vous veillez à la satisfaction de nos clients et assurez la promotion commerciale de votre restaurant.', 3000, 'bagelstein - Paris 15e (75)', 'Temps plein, Temps partiel, CDI', 60, 6, 'https://cdn.generationvoyage.fr/2019/12/dubai-chameau-755x350.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `idCompanies` int(11) NOT NULL,
  `nameCompanies` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`idCompanies`, `nameCompanies`) VALUES
(1, 'Total'),
(3, 'auchan'),
(4, 'Wingles Panamas'),
(5, 'Emerya Thailand'),
(6, 'Cpm Consulting Dubai'),
(7, 'LIDL'),
(9, 'McDonald\'s'),
(10, 'StandardEcomCompany'),
(11, 'Google'),
(36, 'albert'),
(39, 'TrucTruc');

-- --------------------------------------------------------

--
-- Table structure for table `informationJob`
--

CREATE TABLE `informationJob` (
  `idinformationJob` int(11) NOT NULL,
  `message` text NOT NULL,
  `peopleID` int(11) NOT NULL,
  `advertisementsID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `informationJob`
--

INSERT INTO `informationJob` (`idinformationJob`, `message`, `peopleID`, `advertisementsID`) VALUES
(3, 'tak', 1, 1),
(4, 'taktak', 1, 3),
(5, '\"taktaktak\"', 1, 1),
(10, 'bonjour les enfants', 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `People`
--

CREATE TABLE `People` (
  `idPeople` int(11) NOT NULL,
  `mailPeople` varchar(255) NOT NULL,
  `namePeople` varchar(255) NOT NULL,
  `phonePeople` char(10) NOT NULL,
  `statusPeople` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `People`
--

INSERT INTO `People` (`idPeople`, `mailPeople`, `namePeople`, `phonePeople`, `statusPeople`) VALUES
(1, 'albert.lanne@gmail', 'Albert Lanne', '0617030308', 'COO'),
(2, 'albert@mail.fr', 'Alberttttt', '0610203040', 'COO'),
(6, 'tharick@mail.fr', 'tharick', '0610203040', 'COO'),
(8, 'JeanPierre.vandam@gmail.com', 'JeanPierreVandam', '0617030308', 'user'),
(10, 'louis.lanne@gmail.com', 'Louis Lanne', '0616643660', 'user'),
(11, 'louis.lanne@gmail.com', 'Louis Lanne', '0616643660', 'user'),
(12, 'albert.kader@gmail.com', 'Albert Kader', '01586422', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertisements`
--
ALTER TABLE `advertisements`
  ADD PRIMARY KEY (`idAdvertisements`),
  ADD KEY `idCompanies` (`CompaniesID`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`idCompanies`);

--
-- Indexes for table `informationJob`
--
ALTER TABLE `informationJob`
  ADD PRIMARY KEY (`idinformationJob`),
  ADD KEY `idPeople` (`peopleID`),
  ADD KEY `idAdvertissements` (`advertisementsID`);

--
-- Indexes for table `People`
--
ALTER TABLE `People`
  ADD PRIMARY KEY (`idPeople`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertisements`
--
ALTER TABLE `advertisements`
  MODIFY `idAdvertisements` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `idCompanies` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `informationJob`
--
ALTER TABLE `informationJob`
  MODIFY `idinformationJob` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `People`
--
ALTER TABLE `People`
  MODIFY `idPeople` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `advertisements`
--
ALTER TABLE `advertisements`
  ADD CONSTRAINT `advertisements_ibfk_1` FOREIGN KEY (`CompaniesID`) REFERENCES `companies` (`idcompanies`) ON UPDATE CASCADE;

--
-- Constraints for table `informationJob`
--
ALTER TABLE `informationJob`
  ADD CONSTRAINT `informationjob_ibfk_1` FOREIGN KEY (`peopleID`) REFERENCES `People` (`idpeople`) ON UPDATE CASCADE,
  ADD CONSTRAINT `informationjob_ibfk_2` FOREIGN KEY (`advertisementsID`) REFERENCES `advertisements` (`idAdvertisements`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
