pour enregistrer directement avec les foreigns keys sur SQL :
la table(niveau Mysql) qui n'a pas de clé étrangère doit etre la 1er à être crée exp ici : category


INSERT INTO category (nom) VALUES
    ('MacBook'),
    ('Asus'),
    ('Lenovo'),
    ('Redmi'),
    ('Iphone'),
    ('Oppo'),
    ('Samsung'),
    ('Ipad'),
    ('Airpods'),
    ('Montre'),
    ('Accessoire')
;

INSERT INTO article (color, date, descp, name, prix, stockage,qte_restant, qte_total, type,categorie_id)
VALUES
    ("Argent", "2023-10-02", "Le MacBook Pro 13 pouces est un ordinateur portable haut de gamme d'Apple. Il est doté d'un écran Retina, d'un processeur puissant et d'un espace de stockage de 512 Go SSD.", "MacBook Pro 13 pouces", 1499.99, "512 Go SSD",14, 14, "MacBook",1),
    ("Gris", "2023-10-02", "Le MacBook Air 13 pouces est un ordinateur portable léger et compact d'Apple. Il offre des performances fiables et un espace de stockage de 256 Go SSD.", "MacBook Air 13 pouces", 1099.99, "256 Go SSD",10, 10, "MacBook",1),
    ("Or", "2023-10-02", "Le MacBook Pro 16 pouces est un ordinateur portable professionnel conçu pour les tâches les plus exigeantes. Il dispose d'un écran large, d'un espace de stockage de 1 To SSD et d'un processeur ultra-performant.", "MacBook Pro 16 pouces", 2399.99, "1 To SSD",2, 2, "MacBook",1),
    ("Blanc", "2023-10-02", "Le MacBook Air 11 pouces est un ordinateur portable compact idéal pour une utilisation quotidienne. Il est doté d'un écran net et d'un espace de stockage de 128 Go SSD.", "MacBook Air 11 pouces", 899.99, "128 Go SSD", 8,8, "MacBook",1),
    ("Noir", "2023-10-02", "Le MacBook Pro 14 pouces est le dernier ajout à la gamme d'ordinateurs portables d'Apple. Il offre une combinaison parfaite de puissance et de portabilité avec un espace de stockage de 512 Go SSD.", "MacBook Pro 14 pouces", 1799.99, "512 Go SSD", 17,17, "MacBook",1),
    ("Rose", "2023-10-02", "Le MacBook Air 14 pouces est un ordinateur portable élégant et performant, idéal pour les professionnels en déplacement. Il dispose d'un espace de stockage de 256 Go SSD.", "MacBook Air 14 pouces", 1399.99, "256 Go SSD", 13,13, "MacBook",1)
,
    ("Noir", "2023-10-03", "L'Asus ZenBook 14 est un ordinateur portable ultraléger et compact qui offre des performances exceptionnelles. Il est doté d'un processeur Intel Core i7, de 16 Go de RAM et d'un SSD de 512 Go.", "Asus ZenBook 14", 1299.99, "512 Go SSD",12, 12, "Asus",2),
    ("Gris", "2023-10-03", "L'Asus VivoBook S15 est un ordinateur portable polyvalent idéal pour le travail et les loisirs. Il dispose d'un écran Full HD de 15,6 pouces et d'un processeur Intel Core i5.", "Asus VivoBook S15", 899.99, "256 Go SSD",8, 8, "Asus",2),
    ("Blanc", "2023-10-04", "L'Asus ROG Zephyrus G14 est un ordinateur portable de jeu puissant équipé d'une carte graphique NVIDIA GeForce RTX 3060 et d'un processeur AMD Ryzen 9.", "Asus ROG Zephyrus G14", 1799.99, "1 To SSD",17, 17, "Asus",2),
    ("Gris", "2023-10-04", "L'Asus Chromebook Flip C434 est un ordinateur portable convertible qui allie élégance et performances. Il est équipé d'un écran tactile Full HD de 14 pouces et d'un processeur Intel Core M3.", "Asus Chromebook Flip C434", 699.99, "128 Go SSD",6, 6, "Asus",2),
    ("Bleu", "2023-10-05", "L'Asus ZenBook Flip 13 est un ordinateur portable convertible polyvalent avec un écran tactile OLED 13,3 pouces 4K. Il est alimenté par un processeur Intel Core i7 et dispose de 16 Go de RAM.", "Asus ZenBook Flip 13", 1399.99, "512 Go SSD",13, 13, "Asus",2),
    ("Rose", "2023-10-05", "L'Asus VivoBook 15 est un ordinateur portable abordable avec un écran Full HD de 15,6 pouces et un processeur AMD Ryzen 5. Il offre une grande capacité de stockage avec un disque dur de 1 To.", "Asus VivoBook 15", 799.99, "1 To HDD",7, 7, "Asus",2)
,
    ("Gris", "2023-10-06", "Le Lenovo ThinkPad X1 Carbon est un ordinateur portable professionnel ultraléger. Il est équipé d'un écran tactile WQHD de 14 pouces, d'un processeur Intel Core i7 et d'un SSD de 512 Go.", "Lenovo ThinkPad X1 Carbon", 16, "512 Go SSD",4, 4, "Lenovo",3),
    ("Noir", "2023-10-06", "Le Lenovo Yoga C940 est un ordinateur portable convertible avec un écran tactile 4K de 14 pouces. Il est alimenté par un processeur Intel Core i7 et dispose de 16 Go de RAM.", "Lenovo Yoga C940", 1499.99, "1 To SSD",14, 14, "Lenovo",3),
    ("Argent", "2023-10-07", "Le Lenovo Legion 5 est un ordinateur portable de jeu puissant avec une carte graphique NVIDIA GeForce RTX 3060 et un processeur AMD Ryzen 7. Il offre un écran Full HD de 15,6 pouces avec un taux de rafraîchissement de 144 Hz.", "Lenovo Legion 5", 1299.99, "512 Go SSD",12, 12, "Lenovo",3),
    ("Gris", "2023-10-07", "Le Lenovo IdeaPad Flex 5 est un ordinateur portable polyvalent avec un écran tactile Full HD de 14 pouces. Il est alimenté par un processeur AMD Ryzen 5 et dispose de 8 Go de RAM.", "Lenovo IdeaPad Flex 5", 899.99, "256 Go SSD",8, 8, "Lenovo",3),
    ("Noir", "2023-10-08", "Le Lenovo Chromebook Duet est un ordinateur portable 2-en-1 compact avec un écran détachable de 10,1 pouces. Il est alimenté par un processeur MediaTek et offre une grande autonomie de batterie.", "Lenovo Chromebook Duet", 299.99, "64 Go",2, 2, "Lenovo",3),
    ("Bleu", "2023-10-08", "Le Lenovo IdeaPad Gaming 3 est un ordinateur portable de jeu abordable avec une carte graphique NVIDIA GeForce GTX 1650 Ti et un processeur AMD Ryzen 5. Il offre un écran Full HD de 15,6 pouces.", "Lenovo IdeaPad Gaming 3", 999.99, "512 Go SSD",9, 9, "Lenovo",3)
,
    ("Bleu", "2023-10-12", "Le Redmi Note 10 est un smartphone abordable avec un écran AMOLED de 6,43 pouces. Il est équipé d'un processeur Snapdragon 678, de 6 Go de RAM et d'une batterie de 5000 mAh.", "Redmi Note 10", 229.99, "128 Go",2, 2, "Redmi",4),
    ("Gris", "2023-10-12", "Le Redmi K40 Pro est un smartphone haut de gamme avec un écran AMOLED de 6,67 pouces. Il est alimenté par un processeur Snapdragon 888, jusqu'à 12 Go de RAM et dispose d'une caméra principale de 64 MP.", "Redmi K40 Pro", 899.99, "256 Go",8, 8, "Redmi",4),
    ("Blanc", "2023-10-13", "Le Redmi 9 est un smartphone polyvalent avec un écran Full HD+ de 6,53 pouces. Il est équipé d'un processeur MediaTek Helio G80, de 4 Go de RAM et d'une batterie de 5020 mAh.", "Redmi 9", 169.99, "64 Go", 12,12, "Redmi",4),
    ("Noir", "2023-10-13", "Le Redmi Note 10 Pro est un smartphone avec un écran AMOLED de 6,67 pouces. Il est alimenté par un processeur Snapdragon 732G, jusqu'à 8 Go de RAM et dispose d'une caméra principale de 108 MP.", "Redmi Note 10 Pro", 299.99, "128 Go",2, 2, "Redmi",4),
    ("Vert", "2023-10-14", "Le Redmi K30 Ultra est un smartphone haut de gamme avec un écran AMOLED de 6,67 pouces. Il est alimenté par un processeur MediaTek Dimensity 1000+, jusqu'à 8 Go de RAM et dispose d'une caméra pop-up de 20 MP.", "Redmi K30 Ultra", 699.99, "256 Go", 6,6, "Redmi",4),
    ("Rose", "2023-10-14", "Le Redmi Note 9S est un smartphone puissant avec un écran IPS de 6,67 pouces. Il est équipé d'un processeur Snapdragon 720G, de 6 Go de RAM et d'une batterie de 5020 mAh.", "Redmi Note 9S", 249.99, "128 Go",2, 2, "Redmi",4)
,
    ("Argent", "2023-10-15", "L'iPhone 13 Pro est un smartphone haut de gamme d'Apple avec un écran Super Retina XDR de 6,1 pouces. Il est alimenté par la puce A15 Bionic, dispose de trois caméras de 12 MP et est résistant à l'eau.", "iPhone 13 Pro", 999.99, "128 Go",9, 9, "Iphone",5),
    ("Or", "2023-10-15", "L'iPhone 13 Mini est un smartphone compact d'Apple avec un écran Super Retina XDR de 5,4 pouces. Il est alimenté par la puce A15 Bionic, dispose de deux caméras de 12 MP et est disponible en plusieurs couleurs.", "iPhone 13 Mini", 799.99, "64 Go", 7,7, "Iphone",5),
    ("Gris", "2023-10-16", "L'iPhone 13 Pro Max est le plus grand smartphone d'Apple avec un écran Super Retina XDR de 6,7 pouces. Il est alimenté par la puce A15 Bionic, dispose de trois caméras de 12 MP et offre une excellente autonomie de batterie.", "iPhone 13 Pro Max", 1099.99, "256 Go",10, 10, "Iphone",5),
    ("Bleu", "2023-10-16", "L'iPhone 12 est un smartphone d'Apple avec un écran Super Retina XDR de 6,1 pouces. Il est alimenté par la puce A14 Bionic, dispose de deux caméras de 12 MP et prend en charge la connectivité 5G.", "iPhone 12", 899.99, "128 Go",8, 8, "Iphone",5),
    ("Argent", "2023-10-17", "L'iPhone 12 Pro est un smartphone haut de gamme d'Apple avec un écran Super Retina XDR de 6,1 pouces. Il est alimenté par la puce A14 Bionic, dispose de trois caméras de 12 MP et offre des fonctionnalités avancées de photographie.", "iPhone 12 Pro", 1099.99, "256 Go", 10,10, "Iphone",5),
    ("Or", "2023-10-17", "L'iPhone SE (2020) est un smartphone compact et abordable d'Apple avec un écran Retina HD de 4,7 pouces. Il est alimenté par la puce A13 Bionic, dispose d'une caméra de 12 MP et est compatible avec Touch ID.", "iPhone SE (2020)", 399.99, "64 Go", 3,3, "Iphone",5)
,
    ("Bleu", "2023-10-18", "L'Oppo Find X3 Pro est un smartphone haut de gamme avec un écran AMOLED de 6,7 pouces. Il est alimenté par la puce Snapdragon 888, dispose d'un système de caméra quadruple de 50 MP et prend en charge la charge ultra-rapide.", "Oppo Find X3 Pro", 1199.99, "256 Go",11, 11, "Oppo" ,6),
    ("Noir", "2023-10-18", "L'Oppo Reno 6 Pro est un smartphone élégant avec un écran AMOLED de 6,55 pouces. Il est alimenté par la puce Dimensity 1200, dispose d'une caméra principale de 64 MP et offre des fonctionnalités de photographie avancées.", "Oppo Reno 6 Pro", 899.99, "128 Go", 8,8, "Oppo",6),
    ("Blanc", "2023-10-19", "L'Oppo A94 est un smartphone polyvalent avec un écran AMOLED de 6,43 pouces. Il est alimenté par le processeur MediaTek Helio P95, dispose d'une caméra de 48 MP et offre une grande autonomie de batterie.", "Oppo A94", 449.99, "128 Go",4, 4, "Oppo",6),
    ("Rouge", "2023-10-19", "L'Oppo F19 Pro+ est un smartphone élégant avec un écran AMOLED de 6,4 pouces. Il est alimenté par le processeur MediaTek Dimensity 800U, dispose d'une caméra de 48 MP et prend en charge la charge rapide VOOC.", "Oppo F19 Pro+", 599.99, "256 Go",5, 5, "Oppo",6),
    ("Vert", "2023-10-20", "L'Oppo A53s est un smartphone abordable avec un écran IPS de 6,5 pouces. Il est alimenté par le processeur MediaTek Helio G80, dispose d'une batterie de 5000 mAh et offre une grande capacité de stockage.", "Oppo A53s", 299.99, "128 Go",2, 2, "Oppo",6),
    ("Argent", "2023-10-20", "L'Oppo Find X2 Neo est un smartphone élégant avec un écran AMOLED de 6,5 pouces. Il est alimenté par le processeur Snapdragon 765G, dispose d'une caméra principale de 48 MP et prend en charge la charge rapide VOOC.", "Oppo Find X2 Neo", 799.99, "256 Go",7, 7, "Oppo",6)
,
    ("Noir", "2023-10-21", "Le Samsung Galaxy S21 Ultra est un smartphone haut de gamme avec un écran Dynamic AMOLED de 6,8 pouces. Il est alimenté par la puce Exynos 2100, dispose d'un système de caméra quadruple de 108 MP et prend en charge la connectivité 5G.", "Samsung Galaxy S21 Ultra", 1399.99, "256 Go",7, 7, "Samsung",7),
    ("Bleu", "2023-10-21", "Le Samsung Galaxy A52 est un smartphone polyvalent avec un écran Super AMOLED de 6,5 pouces. Il est alimenté par le processeur Snapdragon 720G, dispose d'une caméra quadruple de 64 MP et offre une grande autonomie de batterie.", "Samsung Galaxy A52", 449.99, "128 Go",4, 4, "Samsung",7),
    ("Gris", "2023-10-22", "Le Samsung Galaxy Note 20 Ultra est un smartphone haut de gamme avec un écran Dynamic AMOLED de 6,9 pouces et un stylet S Pen. Il est alimenté par la puce Exynos 990, dispose d'un système de caméra triple de 108 MP et prend en charge le S Pen.", "Samsung Galaxy Note 20 Ultra", 1199.99, "256 Go",9, 9, "Samsung",7),
    ("Argent", "2023-10-22", "Le Samsung Galaxy Z Fold 3 est un smartphone pliable avec un écran AMOLED de 7,6 pouces et une conception pliante. Il est alimenté par la puce Snapdragon 888, dispose d'un système de caméra triple de 12 MP et prend en charge le stylet S Pen.", "Samsung Galaxy Z Fold 3", 1799.99, "512 Go",7, 7, "Samsung",7),
    ("Blanc", "2023-10-23", "Le Samsung Galaxy S20 FE est un smartphone abordable avec un écran Super AMOLED de 6,5 pouces. Il est alimenté par la puce Exynos 990, dispose d'une caméra triple de 12 MP et prend en charge la connectivité 5G.", "Samsung Galaxy S20 FE", 699.99, "128 Go",8, 8, "Samsung",7),
    ("Rose", "2023-10-23", "Le Samsung Galaxy A72 est un smartphone polyvalent avec un écran Super AMOLED de 6,7 pouces. Il est alimenté par le processeur Snapdragon 720G, dispose d'une caméra quadruple de 64 MP et offre une grande autonomie de batterie.", "Samsung Galaxy A72", 549.99, "256 Go",6, 6, "Samsung",7)
,
    ("Or", "2023-10-26", "L'iPad Mini 6ème génération est une tablette compacte avec un écran Retina de 8,3 pouces. Il est alimenté par la puce A15 Bionic, prend en charge l'Apple Pencil 2ème génération et est idéal pour la portabilité.", "iPad Mini 6ème génération", 549.99, "256 Go", 4,4, "Ipad",8),
    ("Argent", "2023-10-27", "L'iPad Pro 11 pouces (2021) est une tablette haut de gamme avec un écran Liquid Retina XDR de 11 pouces. Il est alimenté par la puce M1, prend en charge l'Apple Pencil 2ème génération et offre une grande capacité de stockage.", "iPad Pro 11 pouces (2021)", 899.99, "256 Go",9, 9, "Ipad",8),
    ("Gris", "2023-10-27", "L'iPad 8ème génération (2020) est une tablette polyvalente avec un écran Retina de 10,2 pouces. Il est alimenté par la puce A12 Bionic, prend en charge l'Apple Pencil 1ère génération et offre des performances fiables.", "iPad 8ème génération (2020)", 429.99, "128 Go",4, 4, "Ipad",8),
    ("Or", "2023-10-28", "L'iPad Air 4ème génération (2020) est une tablette polyvalente avec un écran Liquid Retina de 10,9 pouces. Il est alimenté par la puce A14 Bionic, prend en charge l'Apple Pencil 2ème génération et est compatible avec le Magic Keyboard.", "iPad Air 4ème génération (2020)", 649.99, "256 Go",5, 5, "Ipad",8),
    ("Argent", "2023-10-28", "L'iPad Pro 11 pouces (2020) est une tablette haut de gamme avec un écran Liquid Retina de 11 pouces. Il est alimenté par la puce A12Z Bionic, prend en charge l'Apple Pencil 2ème génération et offre des performances exceptionnelles.", "iPad Pro 11 pouces (2020)", 799.99, "512 Go",8, 8, "Ipad",8),
    ("Gris", "2023-10-29", "L'iPad Mini 4 est une tablette compacte avec un écran Retina de 7,9 pouces. Il est alimenté par la puce A8, prend en charge l'Apple Pencil 1ère génération et est idéal pour la mobilité.", "iPad Mini 4", 399.99, "128 Go",7, 7, "Ipad",8)
,
    ("Blanc", "2023-10-27", "Les AirPods Pro sont des écouteurs True Wireless avec réduction active du bruit. Ils offrent un son de haute qualité, un ajustement confortable et sont résistants à l'eau et à la transpiration.", "AirPods Pro", 249.99, "N/A",7, 7, "Airpods",9),
    ("Blanc", "2023-10-27", "Les AirPods Max sont des casques circum-auriculaires sans fil offrant un son haute fidélité et une réduction active du bruit. Ils sont dotés du moteur H1 pour un traitement audio avancé.", "AirPods Max", 549.99, "N/A", 13,13, "Airpods",9),
    ("Blanc", "2023-10-28", "Les AirPods (3ème génération) sont des écouteurs True Wireless avec un design amélioré et un son de haute qualité. Ils offrent une expérience d'écoute immersive et une autonomie prolongée.", "AirPods (3ème génération)", 199.99, "N/A",3, 3, "Airpods",9),
    ("Blanc", "2023-10-28", "Les AirPods (2ème génération) sont des écouteurs True Wireless qui offrent une connexion rapide et un son exceptionnel. Ils sont compatibles avec Siri et disposent d'un boîtier de charge.", "AirPods (2ème génération)", 159.99, "N/A",12,12, "Airpods",9),
    ("Blanc", "2023-10-29", "Les AirPods (1ère génération) sont les premiers écouteurs True Wireless d'Apple. Ils offrent une expérience d'écoute sans fil fluide et sont dotés d'un boîtier de charge.", "AirPods (1ère génération)", 139.99, "N/A",9, 9, "Airpods",9),
    ("Blanc", "2023-10-29", "Les AirPods Pro (édition spéciale) sont des écouteurs True Wireless avec des finitions spéciales. Ils offrent les mêmes fonctionnalités avancées que les AirPods Pro standard.", "AirPods Pro (édition spéciale)", 269.99, "N/A",12, 12, "Airpods",9)
,
    ("Argent", "2023-10-30", "L'Apple Watch Series 7 est une montre connectée avec un écran Retina toujours actif de 45 mm. Elle offre des fonctionnalités de suivi de la santé, de fitness et une conception étanche.", "Apple Watch Series 7 (45mm)", 429.99, "N/A", 4,4, "Montre",10),
    ("Or", "2023-10-30", "L'Apple Watch SE est une montre connectée abordable avec un écran Retina de 40 mm. Elle offre des fonctionnalités de suivi de la santé, de fitness et une grande autonomie de batterie.", "Apple Watch SE (40mm)", 279.99, "N/A",6, 6, "Montre",10),
    ("Noir", "2023-10-31", "La Samsung Galaxy Watch 4 est une montre connectée avec un écran Super AMOLED de 44 mm. Elle offre des fonctionnalités de suivi de la santé, de fitness et est compatible avec les smartphones Android.", "Samsung Galaxy Watch 4 (44mm)", 349.99, "N/A",5,5, "Montre",10),
    ("Blanc", "2023-10-31", "La Fitbit Versa 3 est une montre connectée avec un écran AMOLED de 40 mm. Elle offre des fonctionnalités de suivi de la santé, de fitness et une autonomie de batterie de plus de 6 jours.", "Fitbit Versa 3 (40mm)", 229.99, "N/A",2, 2, "Montre",10),
    ("Gris", "2023-11-01", "La Garmin Forerunner 45 est une montre de course avec un écran transflectif de 42 mm. Elle offre des fonctionnalités de suivi de la course, de la fréquence cardiaque et une autonomie de batterie de jusqu'à 7 jours.", "Garmin Forerunner 45 (42mm)", 199.99, "N/A",10, 10, "Montre",10),
    ("Rose", "2023-11-01", "La Huawei Watch Fit est une montre connectée avec un écran AMOLED rectangulaire. Elle offre des fonctionnalités de suivi de la santé, de fitness et une autonomie de batterie impressionnante.", "Huawei Watch Fit", 129.99, "N/A",12, 12, "Montre",10)
,
    ("Blanc", "2023-11-02", "Le chargeur sans fil Apple MagSafe est conçu pour les iPhone 8 et versions ultérieures. Il offre une charge rapide et une connexion magnétique pour un alignement parfait.", "Chargeur sans fil Apple MagSafe", 39.99, "N/A", 3,3, "Accessoire",11),
    ("Noir", "2023-11-02", "La coque OtterBox Defender est une coque robuste et résistante aux chocs pour iPhone 12 Pro Max. Elle offre une protection ultime contre les chutes, les chocs et les rayures.", "Coque OtterBox Defender pour iPhone 12 Pro Max", 49.99, "N/A",12, 12, "Accessoire",11),
    ("Transparent", "2023-11-03", "Le verre trempé Spigen est conçu pour l'écran de l'iPhone 11 Pro. Il offre une protection contre les rayures, les chocs et les chutes, tout en préservant la clarté de l'écran.", "Verre trempé Spigen pour iPhone 11 Pro", 14.99, "N/A", 7,7, "Accessoire",11),
    ("Noir", "2023-11-03", "Les écouteurs Beats Solo Pro offrent un son haute qualité et une réduction active du bruit. Ils sont confortables à porter et offrent une autonomie de batterie allant jusqu'à 22 heures.", "Écouteurs Beats Solo Pro", 299.99, "N/A",3, 3, "Accessoire",11),
    ("Argent", "2023-11-04", "Le support de voiture Spigen est conçu pour tenir fermement votre smartphone pendant que vous conduisez. Il offre une rotation à 360 degrés et une installation facile.", "Support de voiture Spigen", 19.99, "N/A", 9,9, "Accessoire",11),
    ("Blanc", "2023-11-04", "Le câble de charge USB-C vers Lightning d'Apple est compatible avec de nombreux appareils Apple. Il offre une charge rapide et une transmission de données rapide.", "Câble de charge USB-C vers Lightning d'Apple", 19.99, "N/A",5, 5, "Accessoire",11)
;

INSERT INTO user (email, first_name, last_name, password, phone) VALUES
('elanrif.saibaco@gmail.com', 'Elanrif', 'SaidBaco', 'elanrif', '+269 700123456'),
('nirmine.boudoudou@hotmail.com', 'Nirmine', 'Boudoudou', 'nirmine', '+269 700987654'),
('yao.jean@gmail.com', 'Yao', 'Jean', 'jaojean1272', '+269 600555555'),
('nihad.elmorabet@hotmail.com', 'Nihad', 'Elmorabet', 'nihad', '+269 600777777'),
('michael.lee@gmail.com', 'Michael', 'Lee', 'michael', '+269 700444444'),
('sarah.davis@hotmail.com', 'Sarah', 'Davis', 'sarah', '+269 600666666'),
('david.wilson@gmail.com', 'David', 'Wilson', 'david', '+269 600888888'),
('jennifer.evans@hotmail.com', 'Jennifer', 'Evans', 'jennifer', '+269 700222222'),
('brian.taylor@gmail.com', 'Brian', 'Taylor', 'brian', '+269 700999999'),
('karen.brown@hotmail.com', 'Karen', 'Brown', 'karen', '+269 600111111'),
('matthew.anderson@gmail.com', 'Matthew', 'Anderson', 'matthew', '+269 600333333'),
('laura.harris@hotmail.com', 'Laura', 'Harris', 'laura', '+269 600777777'),
('robert.clark@gmail.com', 'Robert', 'Clark', 'robert', '+269 600555555'),
('megan.martin@hotmail.com', 'Megan', 'Martin', 'megan', '+269 600888888'),
('kevin.roberts@gmail.com', 'Kevin', 'Roberts', 'kevin', '+269 700222222');


;

INSERT INTO basket (date, prix_total, prix_unitaire, qte_article, article_id, user_id)
VALUES
    ('2023-10-01', 50.00, 10.00, 5, 1, 1),
    ('2023-10-02', 30.00, 15.00, 2, 1, 5),
    ('2023-10-03', 80.00, 20.00, 4, 3, 3),
    ('2023-10-04', 60.00, 30.00, 2, 4, 9),
    ('2023-10-05', 100.00, 25.00, 4, 5, 5)