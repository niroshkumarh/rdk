# Hostinger Deployment Guide
## RDK Global Finance Website

---

## 📋 **PRE-DEPLOYMENT CHECKLIST**

✅ All files are ready
✅ All paths are relative (compatible with Hostinger)
✅ Firebase configuration is correct
✅ No absolute paths that need changing

---

## 🚀 **STEP-BY-STEP DEPLOYMENT**

### **Step 1: Access Hostinger File Manager**

1. Log in to your **Hostinger account**
2. Go to **hPanel** (Hostinger Control Panel)
3. Find your domain and click **"Manage"**
4. Click on **"File Manager"** in the left sidebar
5. Navigate to the **`public_html`** folder (this is your website root)

---

### **Step 2: Upload Files**

#### **Option A: Using File Manager (Recommended for beginners)**

1. In the **File Manager**, click **"Upload"** button
2. Select all files and folders from your local `RDK` folder:
   - `index.html`
   - `about.html`
   - `career.html`
   - `contact.html`
   - `grievance.html`
   - `regulatory.html`
   - `carrers.html` (optional - can skip)
   - `assets/` folder (entire folder)
   - `Images/` folder (entire folder)
   - `.htaccess` file (will create this)

3. **Important:** Make sure to maintain the folder structure:
   ```
   public_html/
   ├── index.html
   ├── about.html
   ├── career.html
   ├── contact.html
   ├── grievance.html
   ├── regulatory.html
   ├── assets/
   │   ├── css/
   │   │   └── common.css
   │   └── js/
   │       ├── common.js
   │       └── firebase-config.js
   └── Images/
       ├── Logo.png
       ├── hero_section.png
       ├── About_section.png
       └── ... (all other images)
   ```

#### **Option B: Using FTP Client (FileZilla, WinSCP, etc.)**

1. Get your **FTP credentials** from Hostinger:
   - Go to **hPanel** → **FTP Accounts**
   - Note your **FTP Host**, **Username**, **Password**, and **Port**

2. Connect using FTP client:
   - **Host:** Your FTP host (usually `ftp.yourdomain.com` or IP)
   - **Username:** Your FTP username
   - **Password:** Your FTP password
   - **Port:** 21 (or 22 for SFTP)

3. Upload all files to `public_html` folder maintaining the same structure

---

### **Step 3: Set File Permissions**

1. In **File Manager**, select all uploaded files
2. Right-click → **"Change Permissions"**
3. Set permissions:
   - **Folders:** `755`
   - **Files:** `644`
   - **.htaccess file:** `644`

---

### **Step 4: Upload .htaccess File**

1. Create/upload the `.htaccess` file (provided in this guide)
2. Place it in the `public_html` root directory
3. This file ensures:
   - Clean URLs work
   - Proper file access
   - Security headers

---

### **Step 5: Verify Deployment**

1. Open your website in a browser: `https://yourdomain.com`
2. Test the following:
   - ✅ Homepage loads correctly
   - ✅ All navigation links work
   - ✅ Images display properly
   - ✅ CSS styles load
   - ✅ JavaScript functions work
   - ✅ Forms submit correctly
   - ✅ Page loader appears

---

## 📁 **FILES TO UPLOAD**

### **Required Files:**
```
✅ index.html
✅ about.html
✅ career.html
✅ contact.html
✅ grievance.html
✅ regulatory.html
✅ assets/ (entire folder)
✅ Images/ (entire folder)
✅ .htaccess
```

### **Optional Files:**
```
⏭️ carrers.html (duplicate file, can skip)
⏭️ PRODUCTION_READINESS_REPORT.md (documentation)
⏭️ HOSTINGER_DEPLOYMENT_GUIDE.md (this file)
```

---

## ⚙️ **CONFIGURATION**

### **1. Domain Configuration**

If your domain is not pointing to Hostinger:
1. Go to **hPanel** → **Domains**
2. Add your domain or point DNS to Hostinger nameservers

### **2. SSL Certificate**

Hostinger provides free SSL:
1. Go to **hPanel** → **SSL**
2. Enable **Let's Encrypt SSL** for your domain
3. Your site will be accessible via `https://`

### **3. Firebase Configuration**

✅ **No changes needed!** Firebase works from any domain.

Your current Firebase config will work:
- API keys are public (this is normal for Firebase)
- Firebase will accept requests from any domain by default
- If you need to restrict, add your domain in Firebase Console → Authentication → Settings → Authorized domains

---

## 🔧 **TROUBLESHOOTING**

### **Issue: Page shows "Index of /" or file list**
**Solution:** Make sure `index.html` is in `public_html` root folder

### **Issue: Images not loading**
**Solution:** 
- Check folder structure matches exactly
- Verify `Images/` folder is uploaded (capital I)
- Check file permissions (should be 644)

### **Issue: CSS/JS not loading**
**Solution:**
- Verify `assets/` folder structure is correct
- Check browser console for 404 errors
- Ensure file paths are relative (no `/` at start)

### **Issue: Forms not submitting**
**Solution:**
- Check browser console for Firebase errors
- Verify Firebase config is correct
- Check Firebase Security Rules allow writes

### **Issue: 403 Forbidden errors**
**Solution:**
- Check file permissions (should be 644 for files, 755 for folders)
- Verify `.htaccess` file is present and correct

---

## 📞 **HOSTINGER SUPPORT**

If you encounter issues:
1. Check Hostinger Knowledge Base
2. Contact Hostinger Support (24/7 Live Chat)
3. Check Hostinger Community Forum

---

## ✅ **POST-DEPLOYMENT CHECKLIST**

After deployment, verify:

- [ ] Website loads at `https://yourdomain.com`
- [ ] All pages accessible and working
- [ ] Navigation menu works on all pages
- [ ] Images display correctly
- [ ] CSS styles applied properly
- [ ] JavaScript functions work
- [ ] Page loader appears on all pages
- [ ] Contact form submits successfully
- [ ] Career form submits with file upload
- [ ] Grievance form submits with file upload
- [ ] Mobile responsive design works
- [ ] SSL certificate is active (https://)

---

## 🎯 **IMPORTANT NOTES**

1. **File Structure:** Maintain exact folder structure as local
2. **Case Sensitivity:** Linux servers are case-sensitive - ensure folder names match exactly (`Images/` not `images/`)
3. **Firebase:** No changes needed - works from any domain
4. **Backup:** Always keep a backup of your files before uploading
5. **Updates:** To update files, simply upload the new version (overwrite old files)

---

## 🚀 **YOU'RE READY!**

Your website is now ready to go live on Hostinger!

**Good luck with your deployment!** 🎉

---

**Need help?** Check the troubleshooting section or contact Hostinger support.

