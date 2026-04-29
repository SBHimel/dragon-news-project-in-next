import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        _id: 1,
        title: "বাংলাদেশে নতুন প্রযুক্তি পার্ক চালু হয়েছে"
    },
    {
        _id: 2,
        title: "শিক্ষার্থীদের জন্য নতুন আইটি স্কলারশিপ ঘোষণা"
    },
    {
        _id: 3,
        title: "দেশে ইন্টারনেট গতির উন্নতি হয়েছে"
    },
    {
        _id: 4,
        title: "স্টার্টআপ ইকোসিস্টেম দ্রুত বৃদ্ধি পাচ্ছে"
    },
    {
        _id: 5,
        title: "ডিজিটাল বাংলাদেশ প্রকল্পে নতুন মাইলস্টোন অর্জন"
    },
    {
        _id: 6,
        title: "নতুন সাবমেরিন কেবল প্রকল্পে ইন্টারনেট আরও দ্রুত হবে"
    },
    {
        _id: 7,
        title: "সরকার তরুণদের জন্য নতুন ফ্রিল্যান্সিং প্রশিক্ষণ চালু করেছে"
    },
    {
        _id: 8,
        title: "দেশে AI প্রযুক্তি ব্যবহারে নতুন উদ্যোগ নেওয়া হয়েছে"
    },
    {
        _id: 9,
        title: "অনলাইন শিক্ষার মান উন্নয়নে নতুন প্ল্যাটফর্ম চালু"
    },
    {
        _id: 10,
        title: "রপ্তানি খাতে সফটওয়্যার ইন্ডাস্ট্রি দ্রুত বৃদ্ধি পাচ্ছে"
    }
];

const BreakingNews = () => {
    return (
        <div className="bg-gray-200 border-y border-gray-300">
            <div className="flex items-center gap-4 py-3 px-4 max-w-7xl mx-auto">

                {/* 🔴 Pulse Button */}
                <button className="relative bg-red-500 text-white px-4 py-2 rounded-md font-semibold shadow-md animate-pulse">
                    Latest News
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></span>
                </button>

                {/* 📰 Marquee */}
                <div className="overflow-hidden flex-1">
                    <Marquee pauseOnHover speed={70} gradient={false}>
                        {
                            news.map(n => (
                                <span
                                    key={n._id}
                                    className="mx-8 text-gray-900 font-semibold tracking-wide"
                                >
                                    🔥 {n.title} |
                                </span>
                            ))
                        }
                    </Marquee>
                </div>

            </div>
        </div>
    );
};

export default BreakingNews;