import styles from "./styles.module.css";
import PageContent from "@components/Layout/PageContent";
import PageFooter from "@components/Layout/PageFooter";
import PageHeader from "@components/Layout/PageHeader";
// import Breadcrum from "../RouterBreadcrum/RouterBreadcrum";

const PageLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <PageHeader></PageHeader>
      {/* <Breadcrum></Breadcrum> */}
      <PageContent>{children}</PageContent>
      <PageFooter></PageFooter>
    </div>
  );
};

export default PageLayout;
