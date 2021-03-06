const app = getApp();

Page({
	data: {
		StatusBar: app.globalData.StatusBar,
		CustomBar: app.globalData.CustomBar,
		hidden: true,
		current: 0,lines: 0,
		swiperlist: [{
			id: 0,
			url: '../../../img/img1.jpg',
			type: 1
		}, {
			id: 1,
			url: '../../../img/img2.jpg',
			type: 2

		}, {
			id: 2,
			url: '../../../img/img3.jpg',
			type: 3
		}],
		iconList: [{
			id: 1,
			icon: 'friend',
			color: 'red',
			name: '推荐客户',
			type: 1
		}, {
			id: 2,
			icon: 'location',
			color: 'orange',
			name: '地图选房',
			type: 2
		}],
		Headlines: [{
			id:1,
			title:"资讯标题1",
			type: 1
		},{
			id:2,
			title:"资讯标题2",
			type: 2
		},{
			id:3,
			title:"资讯标题3",
			type: 3
		},{
			id:4,
			title:"资讯标题4",
			type: 4
		}],
		videosrc: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",

	},
	onLoad: function () {
		/*console.log(app.globalData.StatusBar);
		console.log(app.globalData.CustomBar);*/
	    wx.getSetting({
	        success: res => {
		        if (!res.authSetting['scope.userInfo']) {
		            wx.redirectTo({
		              	url: '/pages/auth/auth'
		            })
		        }
	        }
	    });
	},
	swiperchange: function (e) {
		this.setData({
			current:e.detail.current
		});
	},
	swipclick: function (e) {
		let that = this;
		var swip = that.data.swiperlist[that.data.current];
		console.log(swip);
		if (swip.type === 1) {
			wx.navigateTo({
				url: '/pages/home/doc/index?id=' + swip.id
			});
		}
	},
	lineschange: function (e) {
		this.setData({
			lines:e.detail.current
		});
	},
	linesclick: function (e) {
		let that = this;
		var swip = that.data.Headlines[that.data.current];
		console.log(swip);
		if (swip.type === 1) {
			wx.navigateTo({
				url: '/pages/home/doc/index?id=' + swip.id
			});
		}
	},
	itemckcred: function (e) {
		let that = this;
		var item = e.currentTarget.dataset;
		console.log(item.index,item.itemtype)
		if (item.itemtype === 1) {
			wx.navigateTo({
				url: '/pages/home/doc/index?id=' + item.index
			});
		}
		if (item.itemtype === 2) {
			wx.navigateTo({
				url: '/pages/home/joinus/index?id=' + item.index
			});
		}
	},
	search: function () {
		wx.navigateTo({
			url: '/pages/home/search/index'
		});
	}
});
