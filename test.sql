SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `producto` (
  `id` bigint(10) NOT NULL,
  `id_tipo_producto` bigint(10) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `producto` (`id`, `id_tipo_producto`, `nombre`, `precio`) VALUES
(1, 1, 'productoPrueba', 100);

CREATE TABLE `stock` (
  `id` bigint(20) NOT NULL,
  `id_producto` bigint(20) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `stock` (`id`, `id_producto`, `cantidad`) VALUES
(1, 1, 50);

CREATE TABLE `tipo_producto` (
  `id` bigint(10) NOT NULL,
  `descripcion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `tipo_producto` (`id`, `descripcion`) VALUES
(1, 'barato'),
(2, 'caro');


ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_tabla_producto_idTipoProducto` (`id_tipo_producto`);

ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_stock_producto` (`id_producto`);

ALTER TABLE `tipo_producto`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `producto`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `stock`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `tipo_producto`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;