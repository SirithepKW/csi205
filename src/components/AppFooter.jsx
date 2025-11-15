const AppFooter = () => {
    return (
        <footer className="bg-light text-center text-dark py-4 mt-5 border-top">
            <h5 className="fw-bold text-primary mb-2">
                มหาวิทยาลัยศรีปทุม
            </h5>
            <p className="mb-1">คณะเทคโนโลยีสารสนเทศ | สาขาวิทยาการคอมพิวเตอร์</p>
            <div className="d-flex justify-content-center gap-3">
                <a href="https://www.facebook.com/spu.informatics" className="text-decoration-none text-primary">
                    Facebook
                </a>
                <a href="https://www.instagram.com/it__spu" className="text-decoration-none text-danger">
                    Instagram
                </a>
            </div>
        </footer>
    );
};

export default AppFooter;
