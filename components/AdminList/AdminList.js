import { useState, useCallback } from "react";
import axios from "axios";
import s from "./AdminList.module.scss";
import Tick from "../../public/svg/tickIcon.svg";
import QuestionMark from "../../public/svg/questionMarkIcon.svg";
import Dagger from "../../public/svg/daggerIcon.svg";
import DeleteIcon from "../../public/svg/deleteIcon.svg";
import EditIcon from "../../public/svg/editIcon.svg";
import AddAdminForm from "../AddAdminForm";
import EditAdminForm from "../EditAdminForm";
import useFetchData from "../../utils/hooks/useFetchData";

export default function AdminList() {
  const [adminList] = useFetchData(
    `${process.env.NEXT_PUBLIC_HOST}api/admin/get-admins`,
    []
  );

  const eAdminStatus = {
    LOGGED: "logged",
    NOTLOGGED: "notLoggedIn",
    DELETED: "deleted",
  };

  const [visible, setVisible] = useState({ isVisible: false, id: null });

  const handleDelete = async (id) => {
    // eslint-disable-next-line no-alert
    if (window.confirm("Видалити користувача зі списку адмінів?")) {
      window.location.reload(false);
      await axios.patch(
        `${process.env.NEXT_PUBLIC_HOST}api/admin/delete-admin?id=${id}`
      );
    }
  };

  const onClickEdit = useCallback((id) => {
    setVisible({ isVisible: true, id });
  }, []);

  const onClickEditCancel = useCallback(() => {
    setVisible({ isVisible: false, id: null });
  }, []);

  function pickIcon(status) {
    switch (status) {
      case status === eAdminStatus.LOGGED:
        return <Tick className={s.icon} />;
      case status === eAdminStatus.NOTLOGGED:
        return <QuestionMark className={s.icon} />;
      case status === eAdminStatus.DELETED:
        return <Dagger className={s.icon} />;
      default:
        return null;
    }
  }

  return (
    <div className={s.container}>
      <h2 className={s.title}>Адміністратори</h2>
      {adminList.map((admin) => (
        <div key={admin.id} className={s.textContainer}>
          <p className={s.email}>
            {pickIcon(admin.status)}
            {admin.email}
            <button
              className={s.btnIcon}
              onClick={() => {
                handleDelete(admin.id);
              }}
            >
              <DeleteIcon />
            </button>
            <button
              className={s.btnIcon}
              type="button"
              onClick={() => onClickEdit(admin.id)}
            >
              <EditIcon />
            </button>
            {visible.isVisible && visible.id === admin.id ? (
              <EditAdminForm admin={admin} cancel={onClickEditCancel} />
            ) : null}
          </p>
        </div>
      ))}
      <h2 className={s.addAdminTitle}>Додати нового адмістратора</h2>
      <AddAdminForm />
    </div>
  );
}
