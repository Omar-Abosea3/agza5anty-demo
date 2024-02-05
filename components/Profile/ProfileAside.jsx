"use client"
import profilePhoto from '../../assets/images/auth/default_profile.png'
import Image from "next/image"
import $ from 'jquery';
import { useEffect, useRef } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '@/app/GlobalRedaux/Features/User/userDataSlice';

export default function ProfileAside({profileNavigation , logOut , t , lang}) {
    // console.log($('.profileAside figure').innerHeight());
    const userData = useSelector((state) => state.user.userData);
    const dispatch = useDispatch();
    const figureHeight = useRef(null);
    const imageHeight = useRef(null);
    const changeActive = (e) => {
        console.log($(e.target).parent());
        if($(e.target).hasClass('d-flex')){
            $(e.target).addClass('profileActiveLinks');
            $('.profileLinks .d-flex').not($(e.target)).removeClass('profileActiveLinks');
        }else{
            $(e.target).parent().addClass('profileActiveLinks');
            console.log($('.profileLinks d-flex').not($(e.target).parent()));
            $('.profileLinks .d-flex').not($(e.target).parent()).removeClass('profileActiveLinks');
        }
        
    }


    const handleUploadProfilePicture = async (e) => {
        console.log(e.target.files[0]);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        console.log(formData);
        try { 
            const Authorization = Cookies.get('accessKey');
            const {data} = await axios({
                method:'post',
                url:`${process.env.apiBaseUrl}/api/v2/user/profile/update/image`,
                headers:{
                    'Content-Type':'multipart/form-data',
                    Authorization,
                },
                data:formData,
            });
            console.log(data);
            dispatch(getUserData());
        } catch (error) {
            console.log(error);
        } 
    };

    useEffect(() => {
        $(figureHeight.current).css('height' , $(figureHeight.current).innerWidth() + 'px');
        $(imageHeight.current).css('width' , $(figureHeight.current).innerWidth() + 'px');
        $(imageHeight.current).css('height' , $(figureHeight.current).innerWidth() + 'px');
    },[])
  return <>
        <aside className="profileAside py-5 px-1 rounded-3">
            <div className="w-100">
                <figure ref={figureHeight} className="m-auto mb-3 position-relative">
                    <Image ref={imageHeight} alt={userData?.image_url.alt_text?userData.image_url.alt_text:'defaultPhoto'}  src={userData?.image_url.url?userData.image_url.url:profilePhoto.src} width={100} height={100}/>
                    <div className='position-absolute changeProfilePicture bottom-0 end-0'>
                        <label htmlFor="input-file">
                            <i className="bi bi-camera-fill"></i>
                        </label>
                        <input id="input-file" onChange={(e) => {handleUploadProfilePicture(e)}}  type="file"  className='d-none' />
                    </div>
                </figure>
                <figcaption className='w-100 text-center px-2'>
                    <h3 className='mb-3'>{userData?.full_name}</h3>
                    <button type='button' onClick={()=>{profileNavigation('editProfile')}} className='btn rounded-5 w-100 mb-4'><i className="fa-solid fa-pencil me-2"></i> {t.profile.edit_profile}</button>
                    <div className='profileLinks px-3 profileNotActiveLinks text-start'>
                        <div onClick={(e) => {changeActive(e); profileNavigation('accountDetailes')}} className="d-flex profileActiveLinks mb-3 align-items-center">
                            <i className="bi bi-person me-3"></i>
                            <p>{t.profile.profile}</p>
                        </div>
                        <div onClick={(e) => {changeActive(e); profileNavigation('profileAddress')}} className="d-flex mb-3 align-items-center">
                            <i className="bi bi-geo-alt me-3"></i>
                            <p>{t.profile.address}</p>
                        </div>
                        <div onClick={(e) => {changeActive(e); profileNavigation('ProfileOrders')}} className="d-flex mb-3 align-items-center">
                            <i className="bi bi-list-ul me-3"></i>
                            <p>{t.profile.orders}</p>
                        </div>
                        <div onClick={(e) => {changeActive(e); profileNavigation('profileWishlist')}} className="d-flex mb-3 align-items-center">
                            <i className="bi bi-heart me-3"></i>
                            <p>{t.profile.wishlist}</p>
                        </div>
                        <div onClick={(e) => {changeActive(e); logOut()}} className="d-flex mb-3 align-items-center">
                            <i className="bi bi-box-arrow-right me-3"></i>
                            <p>{t.auth.logout}</p>
                        </div>
                    </div>
                </figcaption>
            </div>
        </aside>
  </>
}
