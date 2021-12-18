import React from 'react'
import { Link} from "react-router-dom";

export default function Footer() {
    return (
        <div>
            {/* <!-- Footer --> */}
            <footer class="page-footer font-small blue">

            {/* <!-- Copyright --> */}
            <div class="footer-copyright text-center py-3">© 2021 Copyright:
            <Link to="" class="text-decoration-none"> Vendido.com</Link>
            </div>
            </footer>
        </div>
    )
}
