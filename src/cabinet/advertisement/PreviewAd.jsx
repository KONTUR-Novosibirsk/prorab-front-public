import { useContext, useEffect, useState } from "react";

import object from "../../assets/images/stubs/object-mob.png";
import avatar from "../../assets/images/stubs/avatar.svg";
import getHost, { url } from "../../store/host-store";
import AuthContext from "../../store/auth-context";
import { token } from "../../App";
import "../cabinet.sass";

const PreviewAd = ({ id, onPageChange, deactivateHandler, deleteHandler }) => {
    const ctx = useContext(AuthContext);
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(
            getHost({
                controller: "object",
                action: id,
            }),
            {
                headers: {
                    Accept: "application/json",
                    Authorization: token,
                },
            }
        )
            .then((res) => res.json())
            .then((res) => {
                if (res.success){
                    setProduct(res.data);
                }else{
                    if(res.status === 401){
                        localStorage.removeItem("token");
                        window.location.replace("/login");
                    }
                }
                console.log(res.data);
            }).catch(error => {
                console.log(error);
        });
    }, [id, ctx.rerender]);

    return (
        <div className="cabinet_ads__right">
            {id !== 0 && product.status !== 4 ? (
                <div className="wrap">
                    <div className="img">
                        {product.image === null ? (
                            <img src={object} alt="object" />
                        ) : (
                            <img src={url + product.image?.filename} alt="object" />
                        )}
                    </div>
                    <div className="title_box">
                        <h3 className="title">{product.name}</h3>
                        <div className="radio_box">
                            <div className="radio">
                                <input type="radio" name="radio1222" id="12122" defaultChecked />
                                <label htmlFor="12122">
                                    <h5>{product.price_1}</h5>
                                    <span>час</span>
                                </label>
                            </div>
                            <div className="radio">
                                <input type="radio" id="122222" name="radio1222" />
                                <label htmlFor="122222">
                                    <h5>{product.price_2}</h5>
                                    <span>смена</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h5>Описание</h5>
                        <p className="text">{product.about}</p>

                        {product.status_busy === 1 && (
                            <p className="status notactive busy">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none">
                                    <path
                                        d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9858 6.61742 17.0331 4.33646 15.3483 2.65169C13.6635 0.966929 11.3826 0.0141683 9 0ZM13.275 9.9H9C8.76131 9.9 8.53239 9.80518 8.36361 9.63639C8.19482 9.46761 8.1 9.23869 8.1 9V4.554C8.1 4.3153 8.19482 4.08639 8.36361 3.9176C8.53239 3.74882 8.76131 3.654 9 3.654C9.2387 3.654 9.46762 3.74882 9.6364 3.9176C9.80518 4.08639 9.9 4.3153 9.9 4.554V8.1H13.275C13.5137 8.1 13.7426 8.19482 13.9114 8.3636C14.0802 8.53238 14.175 8.7613 14.175 9C14.175 9.23869 14.0802 9.46761 13.9114 9.63639C13.7426 9.80518 13.5137 9.9 13.275 9.9Z"
                                        fill="#F7A928"
                                    />
                                </svg>
                                Занят
                            </p>
                        )}
                        {product.status_busy === 2 && (
                            <p className="status notactive">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none">
                                    <path
                                        d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9858 6.61742 17.0331 4.33646 15.3483 2.65169C13.6635 0.966929 11.3826 0.0141683 9 0ZM13.275 9.9H9C8.76131 9.9 8.53239 9.80518 8.36361 9.63639C8.19482 9.46761 8.1 9.23869 8.1 9V4.554C8.1 4.3153 8.19482 4.08639 8.36361 3.9176C8.53239 3.74882 8.76131 3.654 9 3.654C9.2387 3.654 9.46762 3.74882 9.6364 3.9176C9.80518 4.08639 9.9 4.3153 9.9 4.554V8.1H13.275C13.5137 8.1 13.7426 8.19482 13.9114 8.3636C14.0802 8.53238 14.175 8.7613 14.175 9C14.175 9.23869 14.0802 9.46761 13.9114 9.63639C13.7426 9.80518 13.5137 9.9 13.275 9.9Z"
                                        fill="#F7A928"
                                    />
                                </svg>
                                Cкоро освободится
                            </p>
                        )}
                        {product.status_busy === 0 && (
                            <p className="status active">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none">
                                    <path
                                        d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9858 6.61742 17.0331 4.33646 15.3483 2.65169C13.6635 0.966929 11.3826 0.0141683 9 0ZM13.275 9.9H9C8.76131 9.9 8.53239 9.80518 8.36361 9.63639C8.19482 9.46761 8.1 9.23869 8.1 9V4.554C8.1 4.3153 8.19482 4.08639 8.36361 3.9176C8.53239 3.74882 8.76131 3.654 9 3.654C9.2387 3.654 9.46762 3.74882 9.6364 3.9176C9.80518 4.08639 9.9 4.3153 9.9 4.554V8.1H13.275C13.5137 8.1 13.7426 8.19482 13.9114 8.3636C14.0802 8.53238 14.175 8.7613 14.175 9C14.175 9.23869 14.0802 9.46761 13.9114 9.63639C13.7426 9.80518 13.5137 9.9 13.275 9.9Z"
                                        fill="#F7A928"
                                    />
                                </svg>
                                Свободно сегодня
                            </p>
                        )}

                        <div className="person">
                            <div className="person_img">
                                {ctx.userData.avatar === null ? (
                                    <img src={avatar} alt="" />
                                ) : (
                                    <img src={url + ctx.userData.avatar} alt="" />
                                )}
                            </div>
                            <p className="name">{ctx.userData.name}</p>
                            <div className="grade">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="18"
                                    viewBox="0 0 19 18"
                                    fill="none">
                                    <path
                                        d="M17.3248 5.82417H17.3214H12.2245L10.6476 0.950547C10.4644 0.383727 9.93862 0 9.34556 0C9.34556 0 9.34556 0 9.34523 0C8.7522 0 8.22669 0.384037 8.04317 0.950857L6.46833 5.82415H1.36942C0.776057 5.82415 0.250549 6.20819 0.0670333 6.77539C-0.116174 7.34219 0.0847447 7.96346 0.564801 8.31392L4.69027 11.3254L3.1151 16.1984C2.93191 16.7656 3.13283 17.3868 3.61251 17.7373C3.85255 17.9123 4.13501 18 4.41749 18C4.69997 18 4.98242 17.9123 5.22244 17.7373L9.3476 14.7251L13.4744 17.7372C13.7145 17.9123 13.9966 18 14.2791 18C14.5616 18 14.844 17.9123 15.084 17.7369C15.5641 17.3864 15.7647 16.7652 15.5811 16.198L14.0043 11.3241L18.098 8.33441C18.457 8.08612 18.6923 7.67079 18.6923 7.20044C18.6924 6.4404 18.0809 5.82417 17.3248 5.82417Z"
                                        fill="#F7A928"
                                    />
                                </svg>
                                {ctx.userData.mark === null ? "Нет оценки" : ctx.userData.mark}
                            </div>
                        </div>
                        <div className="buttons">
                            <button className="edit" onClick={() => onPageChange("EditAdPage")}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none">
                                    <path
                                        d="M12.9375 18H2.0625C0.92475 18 0 17.0752 0 15.9375V5.0625C0 3.92475 0.92475 3 2.0625 3H8.4375C8.748 3 9 3.252 9 3.5625C9 3.873 8.748 4.125 8.4375 4.125H2.0625C1.54575 4.125 1.125 4.54575 1.125 5.0625V15.9375C1.125 16.4542 1.54575 16.875 2.0625 16.875H12.9375C13.4542 16.875 13.875 16.4542 13.875 15.9375V9.5625C13.875 9.252 14.127 9 14.4375 9C14.748 9 15 9.25125 15 9.5625V15.9375C15 17.0752 14.0752 18 12.9375 18Z"
                                        fill="#414253"
                                    />
                                    <path
                                        d="M6.57977 11.9835C6.43202 11.9835 6.28802 11.925 6.18227 11.8185C6.04877 11.6857 5.99177 11.4945 6.02852 11.3107L6.55877 8.65871C6.58052 8.54921 6.63452 8.44946 6.71252 8.37146L14.4803 0.604465C15.2843 -0.199535 16.5923 -0.199535 17.397 0.604465C17.7863 0.993715 18.0008 1.51121 18.0008 2.06246C18.0008 2.61371 17.7863 3.13121 17.3963 3.52046L9.62927 11.2882C9.55127 11.367 9.45077 11.4202 9.34202 11.442L6.69077 11.9722C6.65402 11.9797 6.61652 11.9835 6.57977 11.9835ZM9.23177 10.8907H9.23927H9.23177ZM7.62827 9.04646L7.29752 10.704L8.95427 10.3725L16.6013 2.72546C16.7783 2.54771 16.8758 2.31296 16.8758 2.06246C16.8758 1.81196 16.7783 1.57721 16.6013 1.39946C16.2368 1.03421 15.642 1.03421 15.2753 1.39946L7.62827 9.04646Z"
                                        fill="#414253"
                                    />
                                    <path
                                        d="M15.9372 4.7467C15.7932 4.7467 15.6492 4.69195 15.5397 4.5817L13.4187 2.45995C13.199 2.2402 13.199 1.88395 13.4187 1.6642C13.6385 1.44445 13.9947 1.44445 14.2145 1.6642L16.3355 3.78595C16.5552 4.0057 16.5552 4.36195 16.3355 4.5817C16.2252 4.6912 16.0812 4.7467 15.9372 4.7467Z"
                                        fill="#414253"
                                    />
                                </svg>
                                Редактировать
                            </button>
                            {product.status === 2 ? (
                                <button className="deactivate">Отклонено</button>
                            ) : (
                                <button className="deactivate" onClick={() => deactivateHandler(id, product.status)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="14"
                                        viewBox="0 0 20 14"
                                        fill="none">
                                        <path
                                            d="M12.5618 13.16H6.58C2.95173 13.16 0 10.2083 0 6.58C0 2.95173 2.95173 0 6.58 0H12.5618C16.1901 0 19.1418 2.95173 19.1418 6.58C19.1418 10.2083 16.1901 13.16 12.5618 13.16ZM6.58 1.19636C3.61152 1.19636 1.19636 3.61122 1.19636 6.58C1.19636 9.54878 3.61152 11.9636 6.58 11.9636H12.5618C15.5303 11.9636 17.9455 9.54878 17.9455 6.58C17.9455 3.61122 15.5303 1.19636 12.5618 1.19636H6.58ZM6.58 10.1691C4.60091 10.1691 2.99091 8.55908 2.99091 6.58C2.99091 4.60091 4.60091 2.99091 6.58 2.99091C8.55908 2.99091 10.1691 4.60091 10.1691 6.58C10.1691 8.55908 8.55908 10.1691 6.58 10.1691ZM6.58 4.18727C5.26071 4.18727 4.18727 5.26041 4.18727 6.58C4.18727 7.89959 5.26071 8.97273 6.58 8.97273C7.89929 8.97273 8.97273 7.89959 8.97273 6.58C8.97273 5.26041 7.89929 4.18727 6.58 4.18727Z"
                                            fill="#414253"
                                        />
                                    </svg>
                                    {product.status === 0 ? "Деактивировать" : "Активировать"}
                                </button>
                            )}

                            <button className="delete" onClick={() => deleteHandler(id)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none">
                                    <path
                                        d="M13.6132 6.85859L13.3882 13.6688C13.369 14.252 13.1233 14.8049 12.7032 15.2099C12.2831 15.615 11.7217 15.8404 11.1382 15.8383H6.86316C6.27997 15.8404 5.71889 15.6153 5.29887 15.2107C4.87885 14.8061 4.63289 14.2539 4.61316 13.671L4.38816 6.85859C4.38323 6.70941 4.43778 6.56438 4.53978 6.45541C4.64179 6.34644 4.78291 6.28246 4.93209 6.27753C5.08128 6.27261 5.22631 6.32715 5.33528 6.42916C5.44425 6.53117 5.50823 6.67229 5.51316 6.82147L5.73816 13.6333C5.74936 13.9241 5.87281 14.1993 6.08259 14.401C6.29237 14.6027 6.57214 14.7152 6.86316 14.715H11.1382C11.4295 14.7152 11.7096 14.6024 11.9195 14.4002C12.1293 14.198 12.2525 13.9223 12.2632 13.6311L12.4882 6.82147C12.4931 6.67229 12.5571 6.53117 12.666 6.42916C12.775 6.32715 12.92 6.27261 13.0692 6.27753C13.2184 6.28246 13.3595 6.34644 13.4615 6.45541C13.5635 6.56438 13.6181 6.70941 13.6132 6.85859ZM14.3573 4.59228C14.3573 4.74147 14.2981 4.88454 14.1926 4.99003C14.0871 5.09552 13.944 5.15478 13.7948 5.15478H4.20703C4.05785 5.15478 3.91477 5.09552 3.80928 4.99003C3.70379 4.88454 3.64453 4.74147 3.64453 4.59228C3.64453 4.4431 3.70379 4.30002 3.80928 4.19454C3.91477 4.08905 4.05785 4.02978 4.20703 4.02978H5.95078C6.12901 4.03026 6.30104 3.96442 6.4334 3.84506C6.56575 3.7257 6.64897 3.56136 6.66684 3.38403C6.70835 2.96806 6.90324 2.58243 7.21354 2.30229C7.52383 2.02216 7.9273 1.86757 8.34535 1.86866H9.65597C10.074 1.86757 10.4775 2.02216 10.7878 2.30229C11.0981 2.58243 11.293 2.96806 11.3345 3.38403C11.3523 3.56136 11.4356 3.7257 11.5679 3.84506C11.7003 3.96442 11.8723 4.03026 12.0505 4.02978H13.7943C13.9435 4.02978 14.0865 4.08905 14.192 4.19454C14.2975 4.30002 14.3568 4.4431 14.3568 4.59228H14.3573ZM7.64334 4.02978H10.3591C10.2852 3.86089 10.2368 3.68192 10.2157 3.49878C10.2017 3.36013 10.1368 3.23159 10.0335 3.13806C9.93022 3.04453 9.79588 2.99267 9.65653 2.99253H8.34591C8.20656 2.99267 8.07222 3.04453 7.96892 3.13806C7.86562 3.23159 7.80072 3.36013 7.78678 3.49878C7.76542 3.68195 7.71689 3.86092 7.64278 4.02978H7.64334ZM8.20978 12.5522V7.76253C8.20978 7.61335 8.15052 7.47027 8.04503 7.36479C7.93954 7.2593 7.79647 7.20003 7.64728 7.20003C7.4981 7.20003 7.35502 7.2593 7.24953 7.36479C7.14405 7.47027 7.08478 7.61335 7.08478 7.76253V12.5545C7.08478 12.7037 7.14405 12.8467 7.24953 12.9522C7.35502 13.0577 7.4981 13.117 7.64728 13.117C7.79647 13.117 7.93954 13.0577 8.04503 12.9522C8.15052 12.8467 8.20978 12.7037 8.20978 12.5545V12.5522ZM10.9177 12.5522V7.76253C10.9177 7.61335 10.8584 7.47027 10.7529 7.36479C10.6474 7.2593 10.5043 7.20003 10.3552 7.20003C10.206 7.20003 10.0629 7.2593 9.95741 7.36479C9.85192 7.47027 9.79266 7.61335 9.79266 7.76253V12.5545C9.79266 12.7037 9.85192 12.8467 9.95741 12.9522C10.0629 13.0577 10.206 13.117 10.3552 13.117C10.5043 13.117 10.6474 13.0577 10.7529 12.9522C10.8584 12.8467 10.9177 12.7037 10.9177 12.5545V12.5522Z"
                                        fill="#414253"
                                    />
                                </svg>
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default PreviewAd;
