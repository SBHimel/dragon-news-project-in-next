import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getNewsDetailsById } from '@/lib/data';




export const generateMetadata = async({params}) => {
 const { id } = await params;
 console.log(id, "params");

 const news = await getNewsDetailsById(id);
 console.log(news, "news");

 return {
    title: news.title,
    description: news.details,
  }
  
};

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* ==================== MAIN CONTENT ==================== */}
                <div className="lg:col-span-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                        {/* Author Info */}
                        <div className="flex justify-between items-center bg-slate-100 px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <Image 
                                    src={news.author?.img} 
                                    alt={news.author?.name || "Author"} 
                                    height={48} 
                                    width={48} 
                                    className="rounded-full object-cover border border-gray-300"
                                />
                                <div>
                                    <h2 className="font-semibold text-gray-800">{news.author?.name}</h2>
                                    <p className="text-xs text-gray-500">{news.author?.published_date}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-600">
                                <CiShare2 className="text-2xl cursor-pointer hover:text-purple-600 transition-colors" />
                                <CiBookmark className="text-2xl cursor-pointer hover:text-purple-600 transition-colors" />
                            </div>
                        </div>

                        {/* Title */}
                        <div className="px-6 pt-6 pb-4">
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                {news.title}
                            </h1>
                        </div>

                        {/* Image */}
                        <div className="px-6 pb-6">
                            <Image
                                src={news.image_url}
                                alt={news.title}
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover rounded-2xl"
                                priority
                            />
                        </div>

                        {/* Details */}
                        <div className="px-6 pb-8">
                            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed text-[17px]">
                                {news.details}
                            </div>
                        </div>

                        {/* Footer Bar */}
                        <div className="border-t border-gray-100 bg-gray-50 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-6 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <IoIosStar className="text-2xl text-yellow-500" />
                                    <span className="font-semibold">{news.rating?.number}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaEye className="text-xl" />
                                    <span>{news.total_view}</span>
                                </div>
                            </div>

                            <Link href={`/category/${news.category_id}`}>
                                <button className="btn bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 px-6 py-3 rounded-xl font-medium">
                                    See other news for this category
                                    <BsArrowRight className="text-lg" />
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* ==================== RIGHT SIDEBAR ==================== */}
                <div className="lg:col-span-4">
                    <div className="sticky top-8">
                        {/* ← Ekhane height control kora hoyeche */}
                        <div className="max-h-[calc(100vh-100px)] overflow-y-auto custom-scrollbar">
                            <RightSidebar />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsDetailsPage;