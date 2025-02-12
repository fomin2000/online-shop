exports.get404 = (req, res, next) => {
    res.status(404).render('pageNotFound', {pageTitle: 'Error: Page Not Found'});
}