import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

function PageLayout({ children, sidebar = false }) {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
                <main style={{ flex: sidebar ? 2 : 1 }}>
                    {children}
                </main>
                {sidebar && (
                    <aside style={{ flex: 1 }}>
                        <Sidebar totalPosts={0} totalLikes={0} />
                    </aside>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default PageLayout;