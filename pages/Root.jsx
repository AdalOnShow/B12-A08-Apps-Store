import { Outlet, useNavigation } from 'react-router';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Loading from './../components/Loading';

const Root = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === "loading"
  return (
    <div className = "bg-[#f5f5f5]">
      <Navbar />
      {isLoading ? (
        <Loading full />
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  )
}

export default Root