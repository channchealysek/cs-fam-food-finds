const router = require("express").Router();
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes")
const apiRoutes = require("./api/");
const categoryRoutes = require("./category-routes")

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/category", categoryRoutes);

module.exports = router;
