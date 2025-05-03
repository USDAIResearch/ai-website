import UserProfileComponent from "@/components/admin/UserProfileLayout";
import Layout from "@/components/admin/Layout";
export const revalidate = 0
const ProfilePage = () => {
  return (
    <Layout>
      <UserProfileComponent />
    </Layout>
  );
};

export default ProfilePage;
